import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import * as React from "react";
import ConversationsWrapper from "./Conversations/ConversationsWrapper";
import FeedsWrapper from "./Feed/FeedsWrapper";

interface IChatProps {}

const Chat: React.FunctionComponent<IChatProps> = (props) => {
  return (
    <Flex height="100vh">
      <ConversationsWrapper />
      <FeedsWrapper />
    </Flex>
  );
};

export default Chat;
