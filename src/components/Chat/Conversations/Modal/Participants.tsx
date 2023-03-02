import { Flex, Stack, Text } from "@chakra-ui/react";
import { SearchedUser } from "./SearchTypes";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ParticipantsProps {
  participants: Array<SearchedUser>;
  removeParticipants: (userid: string) => void;
}

const Participants: React.FC<ParticipantsProps> = ({
  participants,
  removeParticipants,
}) => {
  return (
    <Flex direction="row" mt={8} flexWrap="wrap" gap="10px">
      {participants.map((user) => (
        <Stack
          key={user.id}
          direction="row"
          align="center"
          bg="whiteAlpha.200"
          borderRadius={4}
          p={2}
        >
          <Text>{user.userName}</Text>
          <IoIosCloseCircleOutline
            size={20}
            cursor="pointer"
            onClick={() => removeParticipants(user.id)}
          />
        </Stack>
      ))}
    </Flex>
  );
};
export default Participants;
