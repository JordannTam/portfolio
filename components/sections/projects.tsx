import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

interface Project {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github?: string;
}

export default function Projects() {
  return (
    <>
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
      </section>
    </>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="hover:scale-105 transition-all delay-50">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </div>
          <span className="text-sm text-gray-500">{project.period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gray-100  dark:bg-gray-800 dark:text-gray-300 rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <ul className="list-disc ml-6 space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      {
        project?.github && (
          <CardFooter className="flex justify-end">
            <Button asChild className="hover:scale-125 hover:bg-gray-100 hover:shadow-md bg-gray-100 text-black dark:bg-gray-800 dark:text-gray-300 transition-all delay-50">
              <a href={project.github} target="_blank" rel="noreferrer noopener">
                <ChevronRight />
              </a>
            </Button>
          </CardFooter>
        ) 
      }

    </Card>
  );
    
}