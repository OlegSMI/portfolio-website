"use client";

import smoothScroll from "@/services/smoothScroll";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const ToTopButton = () => {
  return (
    <div>
      <Button
        size="icon"
        onClick={() => smoothScroll(0, 1000)}
        className="fixed right-[2rem] bottom-[2rem] bg-primary h-[60px] w-[60px] z-50"
      >
        <ArrowUpIcon className="h-[2.2rem] w-[2.2rem] text-white animate-shake" />
      </Button>
    </div>
  );
};

export default ToTopButton;
