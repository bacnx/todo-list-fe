import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AddItem, CheckAuth, Header, List, RetrieveButton } from "@/components";

export default function Home() {
  const cookieStore = cookies();
  const userId = cookieStore.get("userID");
  if (!userId) redirect("/login");

  return (
    <main>
      <CheckAuth />
      <Header />
      <div className="h-full py-8 flex flex-col items-center justify-between">
        <AddItem />
        <RetrieveButton />
        <List />
      </div>
    </main>
  );
}
