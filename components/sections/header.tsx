import { personal } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {

  return (
    <>
      <header className="max-w-4xl mx-auto mb-16 text-center">
      <h1 className="text-4xl font-bold mb-4 dark:text-white">{personal.name}</h1>
      <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">{personal.title}</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{personal.about}</p>
        {/* Contact Links */}
        <div className="flex justify-center gap-6">
          <a href={`mailto:${personal.contact.email}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:hover:text-gray-300">
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a href={`https://github.com/${personal.contact.github}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:hover:text-gray-300">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href={`https://linkedin.com/in/${personal.contact.linkedin}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:hover:text-gray-300">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </header>
    </>

  )
};
