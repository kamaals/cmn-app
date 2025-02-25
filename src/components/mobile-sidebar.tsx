import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Search from "@/components/form/search";
import CategoryList from "@/components/list/category-list";
import { Menu } from "lucide-react";

function MobileSidebar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"w-80"}>
        <div className={"p-4 space-y-4"}>
          <Search />
          <CategoryList />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MobileSidebar;
