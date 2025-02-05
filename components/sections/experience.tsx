import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/lib/data";

interface Job {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export default function Experience() {
  return (
    <>
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Work Experience</h2>
        {experience.map((job, index) => (
          <ExperienceCard key={index} job={job} />
        ))}
      </section>
    </>
  )
};

function ExperienceCard({ job }: { job: Job }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{job.company}</CardTitle>
            <CardDescription>{job.role}</CardDescription>
          </div>
          <span className="text-sm text-gray-500">{job.period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc ml-6 space-y-2">
          {job.achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
