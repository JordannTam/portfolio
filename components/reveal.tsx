import { cn } from "@/lib/utils";
import * as motion from "motion/react-client"
interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "full";
  variant: "left" | "right";
}



export default function Reveal({ children, width = "fit-content", variant} : RevealProps) {

  const variants = {
    right: {
      hidden: { opacity: 0, x: 75 },
      visible: { opacity: 1, x: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 },
    },
  };
  return (
    <div className={cn("relative overflow-hidden", width)}>
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
