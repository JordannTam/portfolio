import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from '@/lib/data';
import Reveal from '../reveal';

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">SKILLS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Reveal variant="top">
          <SkillCard title="Languages" skills={skills.languages} />
        </Reveal>
        <Reveal variant="top">
          <SkillCard title="Frameworks" skills={skills.frameworks} />
        </Reveal>
        <Reveal variant="top">
          <SkillCard title="Databases" skills={skills.databases} />
        </Reveal>
        <Reveal variant="top">
          <SkillCard title="Tools" skills={skills.tools} />
        </Reveal>
      </div>
    </section>
  );
}

function SkillCard({ title, skills }: { title: string, skills: string[] }) {
  return (
    <Card className="group-hover bg-transparent border-none transition-all delay-50">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 dark:text-green rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
