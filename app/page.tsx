import LoggedInView from "@/components/logged-in-view";
import LoggedOutView from "@/components/logged-out-view";
import { verifySession } from "@/lib/session";

export default async function Home() {
  const session = await verifySession();

  return (
    <div className="min-h-screen">
      {session ? <LoggedInView user={session.user} /> : <LoggedOutView />}
    </div>
  );
}
