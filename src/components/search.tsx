import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import SectionHeaders from "@/components/section-headers";

function Search() {
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
      <Input />
    </div>
  );
}

export default Search;
