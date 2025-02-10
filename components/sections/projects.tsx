import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Reveal from "../reveal";

interface Project {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github?: string;
}

export default function Projects({ id }: { id: string }) {
  return (
    <section id={id} className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">PROJECTS</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Reveal key={index} variant="top">
              <ProjectCard  project={project} />
            </Reveal>
          ))}
        </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group transition-all delay-50 border-none hover:shadow-lg bg-transparent hover:dark:bg-light-navy">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="group-hover:text-green">{project.title}</CardTitle>
          </div>
          <span className="text-sm text-gray-500">{project.period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          {/* <ul className="list-disc ml-6 space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul> */}
          <div className="dark:text-slate">{project.description}</div>
        </div>
      </CardContent>
      

          <CardFooter className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2 mb-4 justify-center items-center">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-gray-100   dark:bg-gray-800 dark:text-green rounded-full text-sm opacity-85"
                >
                  {tech}
                </span>
              ))}
            </div>
            {
              project?.github && (
              <Button asChild className="hover:scale-125 hover:bg-gray-100 hover:shadow-md bg-gray-100 text-black dark:bg-gray-800 dark:text-green transition-all delay-50">
                <a href={project.github} target="_blank" rel="noreferrer noopener">
                  <ChevronRight />
                </a>
              </Button>
              ) 
          }
          </CardFooter>

    </Card>
  );
    
}