import React from "react";
import { GameType } from "@/lib/types";

type Props = {
  game: GameType;
};

function Game({ game }: Props) {
  return (
    <div className="p-8 flex flex-col gap-2 rounded-2xl transition-all group bg-white hover:bg-zinc-50">
      <h4 className={"group-hover:font-semibold text-2xl"}>{game.name}</h4>
      <p className={"text-md text-gray-600"}>{game.description}</p>
      <div className="relative min-h-40 bg-muted md:block">
        <img src={game.icon} alt="Image" />
      </div>
    </div>
  );
}

export default Game;
