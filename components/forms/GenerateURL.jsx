import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function GenerateURL() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Please enter a URL"
        className="focus:outline-none focus:border-light-primary focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary "
      />
      <Button className="bg-light-primary hover:bg-[#a56446] dark:bg-dark-primary dark:hover:bg-[#548ca7]">
        Submit
      </Button>
    </div>
  );
}

export default GenerateURL;
