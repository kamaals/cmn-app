"use client";
import React from "react";
import { GameType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

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
      <header className={"flex items-center justify-between"}>
        <h4
          className={
            "group-hover:font-semibold text-2xl text-zinc-800 dark:text-zinc-300"
          }
        >
          {game.name}
        </h4>
        <Button onClick={handlePlay} type={"button"} variant={"default"}>
          <Play />
          Play
        </Button>
      </header>
      <p className={"text-md text-zinc-600 dark:text-zinc-500 my-6"}>
        {game.description}
      </p>
      <div className="relative min-h-40 bg-muted md:block rounded-xl">
        <img src={game.icon} alt="Image" />
      </div>
    </div>
  );
}

export default Game;
