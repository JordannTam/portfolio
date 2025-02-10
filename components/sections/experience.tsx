import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/lib/data";
import { MoveUpRightIcon } from "lucide-react";
import Reveal from "../reveal";

interface Job {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">EXPERIENCE</h2>
      {experience.map((job, index) => (
        <Reveal key={index} variant="top">
          <ExperienceCard job={job} />
        </Reveal>
      ))}
    </section>
  )
};

function ExperienceCard({ job }: { job: Job }) {
  return (
    <Card className="transition-all delay-50 bg-transparent border-none">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="hover:text-green hover:cursor-pointer flex">
              {job.company}
              <MoveUpRightIcon size={20} className="ml-2" />
            </CardTitle>
            <CardDescription className="dark:text-light-slate">{job.role}</CardDescription>
          </div>
          <span className="text-sm text-gray-500">{job.period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc ml-6 space-y-2">
          {job.achievements.map((achievement, i) => (
            <li className="dark:text-slate" key={i}>{achievement}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
      <div className="flex flex-wrap gap-2 mb-4 justify-center items-center">
        {job.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-1 bg-gray-100   dark:bg-gray-800 dark:text-green rounded-full text-sm opacity-85"
          >
            {tech}
          </span>
        ))}
      </div>
      </CardFooter>
    </Card>
  );
}
