import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">CONTACT</h2>
      <div className="flex justify-center gap-6">
        <a href="mailto:jordantamsc@gmail.com" className="flex items-center gap-2 text-gray-600 dark:text-slate hover:text-gray-900 dark:hover:text-light-slate">
          <Mail size={20} />
          <span>Email</span>
        </a>
        <a href="
        https://www.linkedin.com/in/jordan-tam-2a6b5b1b7/" className="flex items-center gap-2 text-gray-600 dark:text-slate hover:text-gray-900 dark:hover:text-light-slate">
          <Mail size={20} />
          <span>LinkedIn</span>
        </a>
      </div>

    </section>
  )
};
