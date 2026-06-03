import React from "react";
import { motion } from "framer-motion";
import MongoDBIcon from "../assets/mongodb.png";
import ExpressIcon from "../assets/express.png";
import ReactIcon from "../assets/react.png";
import NodeIcon from "../assets/nodejs.png";
import RedisIcon from "../assets/redis.png";
import DockerIcon from "../assets/docker.png";

const skills = [
  {
    label: "MongoDB",
    icon: MongoDBIcon,
    description:
      "Building scalable databases with efficient data modeling and queries.",
  },
  {
    label: "Express.js",
    icon: ExpressIcon,
    description:
      "Creating secure REST APIs and backend services for web applications.",
  },
  {
    label: "React.js",
    icon: ReactIcon,
    description:
      "Developing responsive user interfaces with reusable components.",
  },
  {
    label: "Node.js",
    icon: NodeIcon,
    description:
      "Building fast and scalable server-side applications using JavaScript.",
  },
  {
    label: "Redis",
    icon: RedisIcon,
    description: "Using caching and queues to improve application performance.",
  },
  {
    label: "Docker",
    icon: DockerIcon,
    description:
      "Containerizing applications for consistent deployment and development.",
  },
];
const Page2 = () => {
  return (
    <section
      id="skill"
      className="min-h-screen bg-slate-50 px-6 py-24 sm:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-3xl space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
            Technical Skills
          </p>
          <h2 className="text-5xl font-semibold text-slate-950 sm:text-6xl">
            Tools and technologies I rely on
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            I build modern frontend applications with clean structure,
            responsive design, and efficient deployment practices. These are the
            tools I use to deliver polished results.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="section-card p-8 text-center"
            >
              <img
                src={skill.icon}
                alt={skill.label}
                className="mx-auto h-20 w-20 object-contain"
              />
              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                {skill.label}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page2;
