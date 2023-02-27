import { Button, Center, Stack, Text,Image } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FunctionComponent<IAuthProps> = ({
  session,
  reloadSession,
}) => {
  return (
    <Center height="100vh">
      <Stack spacing={8} align="center">
        {session ? (
          <>
            <Button onClick={() => signOut()} width="100%">
              Signout
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="4xl">Msgs</Text>
            <Text width="70%" align="center">
              Sign in with Google to send Unlimted Free messages to your
              friends.
            </Text>
            <Button onClick={() => signIn("google")}
            leftIcon={<Image height="20px" src="/images/googlelogo.png" />}>
            Continue with google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
