import UserMenu from "@/components/user-menu";
import { GAMES } from "@/lib/mock/games";
import Game from "@/components/game";
import Search from "@/components/search";
import Categories from "@/components/categories";
import Script from "next/script";
import ThemeSwitch from "@/components/theme-switch";

export default function Home() {
  return (
    <main className="flex w-full">
      <Script src="/lib/comeon.game-1.1.min.js"></Script>
      <div className={"mx-auto inset-0 flex justify-center sm:px-8"}>
        <div
          className={
            "flex flex-col gap-10 w-full max-w-7xl lg:p-8 bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
          }
        >
          <header className={"px-8 flex justify-between items-center"}>
            <UserMenu />
            <ThemeSwitch />
          </header>
          <section className={"flex flex-col"}>
            <h2 className={"text-4xl font-bold ml-8 mb-8 mt-4"}>Games</h2>
            <div id={"game-launch"}></div>
            <div className={"grid grid-cols-3 gap-8"}>
              <article className={"col-span-2"}>
                {GAMES.map((g) => (
                  <Game game={g} key={g.id} />
                ))}
              </article>
              <aside className={"space-y-4 mr-8"}>
                <Search />
                <Categories />
              </aside>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
