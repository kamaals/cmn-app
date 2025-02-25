import UserMenu from "@/components/user-menu";
import { GAMES } from "@/lib/mock/games";
import Game from "@/components/game";
import Search from "@/components/search";

export default function Home() {
  return (
    <main className="flex w-full ">
      <div className={"mx-auto inset-0 flex justify-center sm:px-8"}>
        <div
          className={"flex flex-col gap-10 w-full max-w-7xl lg:p-8 bg-white"}
        >
          <header>
            <UserMenu />
          </header>
          <section className={"flex flex-col"}>
            <h2 className={"text-4xl font-bold"}>Games</h2>
            <div className={"grid grid-cols-3 gap-8"}>
              <article className={"col-span-2"}>
                {GAMES.map((g) => (
                  <Game game={g} key={g.id} />
                ))}
              </article>
              <aside>
                <Search />
              </aside>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
