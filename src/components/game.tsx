"use client";
import React from "react";
import { GameType } from "@/lib/types";

type Props = {
  game: GameType;
};

function Game({ game }: Props) {
  const handlePlay = React.useCallback(() => {
    // @ts-ignore
    if (window.comeon) {
      // @ts-ignore
      window.comeon.game.launch(game.code);
      const element = document.getElementById("game-launch");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [game]);

  return (
    <div className="p-8 flex flex-col gap-2 rounded-2xl transition-all group bg-white hover:bg-zinc-50 dark:bg-zinc-900 hover:dark:bg-zinc-800/40 mb-12">
      <h4
        className={
          "group-hover:font-semibold text-2xl text-zinc-800 dark:text-zinc-300"
        }
      >
        {game.name}
      </h4>
      <p className={"text-md text-zinc-600 dark:text-zinc-500 my-6"}>
        {game.description}
      </p>
      <div className="relative min-h-40 bg-muted md:block rounded-xl">
        <img src={game.icon} alt="Image" />
      </div>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
}

export default Game;
