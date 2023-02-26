import { NextPageContext } from "next";
import { getSession, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  console.log("Here is Data", data);
  return (
    <div>
      {data?.user ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn("google")}>SignIn</button>
      )}
      {data?.user?.name}
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)
  return {
    props: {
      session
    }
  }
}
