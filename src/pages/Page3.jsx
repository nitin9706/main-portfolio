import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Real-Time Chat App",
    description:
      "Socket.io-powered chat with rooms, realtime messaging, and a clean responsive interface.",
    image: "/src/assets/login.png",
    github: "https://github.com/nitin9706/Chat-App",
    tech: ["Socket.io", "Node.js", "React"],
  },
  {
    number: "02",
    title: "SDS (Frontend Only)",
    description:
      "Practice system design interviews interactive , Build scalable architectures with drag-and-drop.",
    image: "/src/assets/sds.png",
    github: "https://github.com/nitin9706/SDS.git",
    tech: ["Node.js", "Express", "MongoDB"],
  },
  {
    number: "03",
    title: "Personal Portfolio",
    description:
      "A polished portfolio experience that showcases skills, projects, and a clean user flow.",
    image: "/src/assets/portfolio.png",
    github: "https://github.com/nitin9706/Portfolio2",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://portfolio2.vercel.app",
  },
];

const Page3 = () => {
  return (
    <section id="project" className="min-h-screen bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
            Featured work
          </p>
          <h2 className="mt-3 text-5xl font-semibold text-slate-950 sm:text-6xl">
            Projects built for clean UI and strong UX.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Projects are presented with clarity, simple navigation, and a
            polished visual hierarchy that makes each case easy to scan.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="section-card p-8"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-52 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-white">
                {project.number}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-900"
                >
                  View GitHub
                </a>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-4 inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-slate-900 bg-slate-900 text-white"
                  >
                    View Live
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page3;
