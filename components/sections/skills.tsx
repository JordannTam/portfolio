import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SkillCard title="Languages" skills={skills.languages} />
        <SkillCard title="Frameworks" skills={skills.frameworks} />
        <SkillCard title="Databases" skills={skills.databases} />
        <SkillCard title="Tools" skills={skills.tools} />
      </div>
    </section>
  );
}

function SkillCard({ title, skills }: { title: string, skills: string[] }) {
  return (
    <Card className="hover:scale-105 transition-all delay-50">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
