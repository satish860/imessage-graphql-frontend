import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Stack,
  Input,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SearchOperation from "./SearchUserQuery";
import { useLazyQuery } from "@apollo/client";
import { SearchedUser, SearchUserInputs, SearchUsersData } from "./SearchTypes";
import UsersList from "./UsersList";
import Participants from "./Participants";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConversationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [participants, setParticipants] = useState<Array<SearchedUser>>([]);
  const [
    searchUsers,
    {
      data: searchUsersData,
      loading: searchusersLoading,
      error: searchUsersError,
      client,
    },
  ] = useLazyQuery<SearchUsersData, SearchUserInputs>(
    SearchOperation.Queries.searchUsers
  );

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username) {
      // Search the User from the API
      searchUsers({ variables: { username } });
    }
  };

  const addParticipant = (user: SearchedUser) => {
    setParticipants((prev) => [...prev, user]);
    setUsername("");
  };

  const removeParticipant = (userId: string) => {
    setParticipants((prev) => prev.filter((u) => u.id !== userId));
  };

  useEffect(() => {
    if (!isOpen) {
      setParticipants([]);
      setUsername("");

    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "md" }}>
      <ModalOverlay />
      <ModalContent bg="2d2d2d" pb={4}>
        <ModalHeader>Find or Create a Conversation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={onSearch}>
            <Stack spacing={4}>
              <Input
                placeholder="Enter a username"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
              ></Input>
              <Button
                width="100%"
                type="submit"
                isLoading={searchusersLoading}
                isDisabled={username===""}
              >
                Search
              </Button>
            </Stack>
          </form>
          {searchUsersData?.searchUsers && (
            <UsersList
              users={searchUsersData.searchUsers}
              participants={participants}
              addParticipant={addParticipant}
            />
          )}
          {participants.length != 0 && (
            <>
              <Participants
                participants={participants}
                removeParticipants={removeParticipant}
              />
            </>
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default ConversationModal;
