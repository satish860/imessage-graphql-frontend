import { Avatar, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { SearchedUser, SearchUsersData } from "./SearchTypes";

interface UsersListProps {
  users: Array<SearchedUser>;
  participants: Array<SearchedUser>;
  addParticipant: (user: SearchedUser) => void;
}

const UsersList: React.FC<UsersListProps> = ({
  users,
  participants,
  addParticipant,
}) => {
  return (
    <>
      {users.length == 0 ? (
        <Flex mt={6}>
          <Text>No Users Found</Text>
        </Flex>
      ) : (
        <Stack mt={6}>
          {users.map((user) => (
            <Stack
              spacing={4}
              py={2}
              px={4}
              key={user.id}
              borderRadius={4}
              _hover={{ bg: "whiteAlpha.200" }}
              align="center"
              direction="row"
            >
              <Avatar />
              <Flex justify="space-between" width="100%">
                <Text color="whiteAlpha.700">{user.userName}</Text>
                <Button
                  bg="brand.100"
                  _hover={{ bg: "brand.100" }}
                  disabled={
                    !!participants.find(
                      (participant) => participant.id === user.id
                    )
                  }
                  onClick={() => addParticipant(user)}
                >
                  Select
                </Button>
              </Flex>
            </Stack>
          ))}
        </Stack>
      )}
    </>
  );
};
export default UsersList;
