import { cn } from "@/lib/utils";
import Reveal from "../reveal";

export default function About({ className='' } : { className?: string}) {
  return (
    <div className={cn('', className)}>
      <Reveal variant="right">
        <p className="text-2xl my-5 block lg:hidden font-bold">About</p>
          <div>
            I&apos;m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
            Currently, I&apos;m a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo&apos;s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
            In the past, I&apos;ve had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.
            In my spare time, I&apos;m usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
          </div>
      </Reveal>
      <div className="h-[3600px]"/>
    </div>
  )
};
