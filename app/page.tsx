import { UserCard } from "@/components/user-card";
import { verifySession } from "@/lib/session";

export default async function Home() {
  const session = await verifySession();

  return (
    <div className="">
      <UserCard user={session.user} />
    </div>
  );
}
