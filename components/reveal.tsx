import { cn } from "@/lib/utils";
import * as motion from "motion/react-client"
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variant: "left" | "right" | "top";
}



export default function Reveal({ children, variant, className = "fit-content"} : RevealProps) {

  const variants = {
    right: {
      hidden: { opacity: 0, x: 75 },
      visible: { opacity: 1, x: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 },
    },
    top: { 
      hidden: { opacity: 0, y: -75 }, 
      visible: { opacity: 1, y: 0 } 
    },
  };
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        variants={variants[variant]}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
  
};
