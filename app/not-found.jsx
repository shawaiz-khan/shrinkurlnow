import { Button } from "@/components/ui/button";
import NotFoundSvg from "@/components/ui/not-found-svg";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-10 section">
      <h1 className="text-2xl sm:text-4xl font-primary font-medium ">
        Request not found :(
      </h1>
      <NotFoundSvg colorClass="" className="md:h-[250px]" />
      <Link href="/">
        <Button>Go back to home</Button>
      </Link>
    </div>
  );
}
