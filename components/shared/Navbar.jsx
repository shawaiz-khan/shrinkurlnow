"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  const pathname = usePathname();

  const isSigninPage = pathname === "/signin";

  return (
    <header className="w-full h-[5rem] flex items-center justify-between fixed top-0 left-0 right-0 section bg-[url('/light.png')] dark:bg-[url('/dark.png')] bg-cover"  >    <Logo />
      <div className="flex items-center justify-center gap-5">
        <ThemeSwitcher />
        <Link href={isSigninPage ? "/signup" : "/signin"}>
          <Button
            variant="ghost"
            className="border  bg-purple-800 text-white rounded-full hover:bg-transparent hover:border-2 hover:border-purple-800 hover:text-purple-800 dark:hover:text-white border-none px-9"
          >
            {isSigninPage ? "Sign Up" : "Sign In"}
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
