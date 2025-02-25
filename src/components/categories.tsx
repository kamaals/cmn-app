import React from "react";
import SectionHeaders from "@/components/section-headers";
import { ChartBarStacked } from "lucide-react";
import { CATEGORIES } from "@/lib/mock/categories";
import { GAMES } from "@/lib/mock/games";
import Category from "@/components/category";

function Categories() {
  const categories = React.useMemo(() => {
    return CATEGORIES.map((c) => {
      const games = GAMES.filter((f) => f.categoryIds.includes(c.id));
      return { ...c, games };
    });
  }, []);

  return (
    <div
      className={
        "rounded-2xl space-y-2 border border-zinc-200/60 p-6 dark:border-zinc-700/40"
      }
    >
      <SectionHeaders title={"Categories"} subtitle={"Filter by Categories."}>
        <ChartBarStacked
          size={20}
          strokeWidth={1}
          className={"text-zinc-800 dark:text-zinc-300"}
        />
      </SectionHeaders>
      <div className={"space-y-3 mt-2"}>
        {categories.map((c) => (
          <Category key={c.id} category={c} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
