import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();
  if (session) {
    return <p>Signed in as {session?.user?.email}</p>;
  }

  return <div>Home page</div>;
}
