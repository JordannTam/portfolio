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
    <nav className=" z-50 fixed top-0 w-full">
      <div className="dark:bg-[rgba(19,19,19,.15)] opacity-80 backdrop-blur-[6px] mx-auto py-4 items-center md:p-6">
        <div className="flex justify-center gap-[0px] md:justify-normal md:gap-4 md:px-6">
          <Button variant="none" className={`${buttonClasses} hidden sm:block`} onClick={() => handleScroll('header')}>ABOUT</Button>
          <Button variant="none" className={buttonClasses} onClick={() => handleScroll('skills')}>SKILLS</Button>
          <Button variant="none" className={buttonClasses} onClick={() => handleScroll('experience')}>EXPERIENCE</Button>
          <Button variant="none" className={buttonClasses} onClick={() => handleScroll('projects')}>PROJECTS</Button>
          <Button variant="none" className={`${buttonClasses} hidden sm:block`} onClick={() => handleScroll('contact')}>CONTACT</Button>
        </div>
      </div>
      <div className="border-b border-b-[#f4f4f4] w-[95%] mx-auto">
      </div>
    </nav>

  );
};