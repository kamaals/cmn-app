"use client";
import React from "react";
import Game from "@/components/game";
import { GameContext, GameContextType } from "@/lib/context/game-context";

function GameList() {
  const { games } = React.useContext(GameContext) as GameContextType;
  return (
    <article className={"col-span-3 lg:col-span-2"}>
      {games.map((g) => (
        <Game game={g} key={g.id} />
      ))}
    </article>
  );
}

export default GameList;
