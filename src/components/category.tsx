import React from "react";
import { CategoryType, GameType } from "@/lib/types";

type Props = {
  category: CategoryType & { games: Array<GameType> };
};

function Category({ category }: Props) {
  return (
    <div className={"flex group flex-col gap-1 cursor-pointer"}>
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
