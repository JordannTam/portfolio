"use client";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client"
import { ArrowUpRightIcon } from "lucide-react";

export default function HoverArrow({ className, title, url }: { className?: string, title: string, url?: string }) {
  const textClasses = "hover:text-green relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green after:transition-all after:duration-500 hover:after:w-full";

  const textMotion = {
    rest: {
      x: -3,
      y: 3,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      x: 3,
      y: -3,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut"
      }
    }
  };

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  }

    return (
    <div onClick={handleClick} className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial="rest"
        whileHover="hover"
        className="hover:text-green hover:cursor-pointer flex items-center gap-2"
      >
        <span className={textClasses}>
          {title}
        </span>
        {
          url && (
            <motion.div variants={textMotion} >
              <ArrowUpRightIcon  size={20}  />
            </motion.div>
          )
        }
      </motion.div>
    </div>
  );
}