"use client";

// import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const buttonClasses = "rounded-full hover:text-green relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green after:transition-all after:duration-500 hover:after:w-full";
  // const scrolled = useScrollTop();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - (window.innerHeight / 6);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={cn(
      " z-50 dark:bg-[rgba(19,19,19,.15)] backdrop-blur-[6px] opacity-80 fixed top-0 items-center w-full p-6 px-10 gap-4 transition-all duration-300",
    )}>
      <div className="flex gap-4 w-[90%] left-1/2 relative top-0 -translate-x-1/2 transform">
        <Button variant="none" className={buttonClasses} onClick={() => handleScroll('header')}>ABOUT</Button>
        <Button variant="none" className={buttonClasses} onClick={() => handleScroll('skills')}>SKILLS</Button>
        <Button variant="none" className={buttonClasses} onClick={() => handleScroll('experience')}>EXPERIENCE</Button>
        <Button variant="none" className={buttonClasses} onClick={() => handleScroll('projects')}>PROJECTS</Button>
        <Button variant="none" className={buttonClasses} onClick={() => handleScroll('contact')}>CONTACT</Button>

      </div>
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {/* <ModeToggle /> */}
      </div>
      
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] border-b border-b-[#f4f4f4]">
        </div>
    </nav>
  );
};