"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  path: string;
  title: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ path, title }) => {
  const pathName = usePathname();
  const isActive = pathName === path;

  return (
    <Button size="sm" asChild variant={isActive ? "default" : "link"}>
      <Link href={path}>{title}</Link>
    </Button>
  );
};
