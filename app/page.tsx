import { AddItem, Header, List } from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="h-full py-8 flex flex-col items-center justify-between">
        <AddItem />
        <List />
      </div>
    </main>
  );
}
