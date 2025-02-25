import React from "react";
import { CategoryType, GameType } from "@/lib/types";
import { GameContext, GameContextType } from "@/lib/context/game-context";
import { cn } from "@/lib/utils";

type Props = {
  category: CategoryType & { games: Array<GameType> };
};

function Category({ category }: Props) {
  const { selectedCategory, setSelectedCategory } = React.useContext(
    GameContext,
  ) as GameContextType;
  return (
    <div
      onClick={() => {
        setSelectedCategory(category);
      }}
      className={cn(
        "flex group flex-col gap-1 cursor-pointer p-4 rounded-lg",
        selectedCategory?.id === category.id
          ? "bg-zinc-200/30 dark:bg-zinc-800/40"
          : "",
      )}
    >
      <span
        className={
          "text-sm group-hover:font-bold text-zinc-700 dark:text-zinc-300"
        }
      >
        {category.name}
      </span>
      <span className={"text-[0.7rem] text-zinc-600 dark:text-zinc-500"}>
        Number of Games: {category.games.length}
      </span>
    </div>
  );
}

export default Category;
