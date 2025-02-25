import Search from "@/components/form/search";
import CategoryList from "@/components/list/category-list";
import Script from "next/script";
import GameList from "@/components/list/game-list";
import PageHeader from "@/components/page-header";

export default function Home() {
  return (
    <main className="flex w-full">
      <Script src="/lib/comeon.game-1.1.min.js"></Script>
      <div className={"mx-auto inset-0 flex justify-center sm:px-8"}>
        <div
          className={
            "flex flex-col gap-10 w-full max-w-7xl pt-8 lg:p-8 bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
          }
        >
          <PageHeader />
          <section className={"flex flex-col"}>
            <h2 className={"text-4xl font-bold ml-8 mb-8 mt-4"}>Games</h2>
            <div className={"ml-8"} id={"game-launch"}></div>
            <div className={"grid grid-cols-3 gap-8"}>
              <GameList />
              <aside className={"space-y-4 mr-8 hidden lg:block"}>
                <Search />
                <CategoryList />
              </aside>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
