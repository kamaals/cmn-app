import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

function Search() {
  return (
    <div
      className={
        "rounded-2xl space-y-2 border border-zinc-200/60 p-6 dark:border-zinc-70/30"
      }
    >
      <header
        className={
          "flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100"
        }
      >
        <SearchIcon size={20} strokeWidth={1} className={"text-zinc-900"} />
        <span>Search</span>
      </header>
      <div>
        <span className={"text-zinc-600 text-sm"}>Search game by name.</span>
      </div>
      <Input />
    </div>
  );
}

export default Search;
