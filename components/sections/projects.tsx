import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";
import Reveal from "../reveal";
import HoverArrow from "../hover-arrow";

interface Project {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
  url?: string;
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto mb-16">
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
    <Card className="transition-all delay-50 border-none bg-transparent ">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>
              <HoverArrow url={project.url} title={project.title}/>
            </CardTitle>
          </div>
          <span className="text-sm text-slate">{project.period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="dark:text-light-slate">{project.description}</div>
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
          </CardFooter>

    </Card>
  );
    
}