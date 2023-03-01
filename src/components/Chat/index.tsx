import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import * as React from "react";

interface IChatProps {}

const Chat: React.FunctionComponent<IChatProps> = (props) => {
  return (
    <>
      <h1>Chat Component</h1>
      <Button onClick={() => signOut()}>signOut</Button>
    </>
  );
};

export default Chat;
