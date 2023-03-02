import { Button, Center, Stack, Text, Image, Input } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FunctionComponent<IAuthProps> = ({
  session,
  reloadSession,
}) => {
  const [username, setUserName] = useState("");
  const CREATEUSERNAME = gql`
    # Increments a back-end counter and gets its resulting value
    mutation createUserName($username: String!) {
      createUserName(username: $username) {
        sucess
        error
      }
    }
  `;
  const [createUserName, { data, loading, error }] =
    useMutation(CREATEUSERNAME);
  const onSubmit = async () => {
    try {
      if (!username) return;
      console.log(username);
      const { data } = await createUserName({
        variables: { username: username },
      });
      console.log(data);
    } catch (error) {
      console.log("onsubmit Error", error);
    }
  };

  return (
    <Center height="100vh">
      <Stack spacing={8} align="center">
        {session ? (
          <>
            <Text fontSize="3xl">Create a Username</Text>
            <Input
              placeholder="Enter a username"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
            ></Input>
            <Button onClick={onSubmit} isLoading={loading} width="100%">
              save
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="4xl">Msgs</Text>
            <Text width="70%" align="center">
              Sign in with Google to send Unlimted Free messages to your
              friends.
            </Text>
            <Button
              onClick={() => signIn("google")}
              leftIcon={<Image height="20px" src="/images/googlelogo.png" />}
            >
              Continue with google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
