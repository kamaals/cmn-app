"use client";
import React from "react";
import { Search as SearchIcon, SearchX } from "lucide-react";
import { Input } from "@/components/ui/input";
import SectionHeaders from "@/components/section-headers";
import { GameContext, GameContextType } from "@/lib/context/game-context";

function Search() {
  const { searchByName } = React.useContext(GameContext) as GameContextType;

  return (
    <div
      className={
        "rounded-2xl space-y-2 border border-zinc-200/60 p-6 dark:border-zinc-700/40"
      }
    >
      <SectionHeaders title={"Search"} subtitle={"Search game by name."}>
        <SearchIcon
          size={20}
          strokeWidth={1}
          className={"text-zinc-800 dark:text-zinc-300"}
        />
      </SectionHeaders>
      <div className={"relative min-h-9"}>
        <Input
          className={"absolute"}
          onChange={(event) => {
            searchByName(event.target.value);
          }}
        />
        <span
          className={
            "absolute hidden top-0 bottom-0 right-0 items-center pr-2 cursor-pointer"
          }
        >
          <SearchX className={"text-zinc-500 dark:text-zinc-400"} />
        </span>
      </div>
    </div>
  );
}

export default Search;
