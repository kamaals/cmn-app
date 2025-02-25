import React from "react";
import UserMenu from "@/components/user-menu";
import MobileSidebar from "@/components/mobile-sidebar";
import ThemeSwitch from "@/components/theme-switch";

function PageHeader() {
  return (
    <header className={"px-8 flex justify-between items-center"}>
      <UserMenu />
      <div className={"flex gap-2"}>
        <MobileSidebar />
        <ThemeSwitch />
      </div>
    </header>
  );
}

export default PageHeader;
