import React from "react";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

function SectionHeaders({ title, subtitle, children }: Props) {
  return (
    <>
      <header
        className={
          "flex items-center gap-2 text-sm font-semibold text-zinc-800 dark:text-zinc-300"
        }
      >
        {children}
        <span>{title}</span>
      </header>
      <div>
        <span className={"text-zinc-600 text-sm"}>{subtitle}</span>
      </div>
    </>
  );
}

export default SectionHeaders;
