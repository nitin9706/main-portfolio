import React from "react";
import { motion } from "framer-motion";
import IMG from "../assets/IMAGE2.png";

const headlineTags = [
  "MERN Stack",
  "Full-Stack",
  "REST APIs",
  "Socket.IO",
  "Docker",
  "Redis",
];

const Section1 = () => {
  return (
    <section
      className="relative overflow-hidden min-h-screen bg-white px-6 py-24 sm:px-10"
      id="home"
    >
      <div className="absolute inset-x-0 top-0 h-60 bg-linear-to-b from-slate-100 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.9fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <p className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">
            Web Developer
          </p>
          <div className="space-y-5">
            <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              Turning ideas into reliable and scalable web solutions.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              I build modern web applications with a focus on performance,
              scalability, and user experience. From responsive frontends to
              robust backend systems, I create solutions that are reliable,
              efficient, and user-friendly.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#project" className="btn-primary">
              View Projects
            </a>
            <a
              href="/Nitin_Sharma_Resume.pdf"
              download
              className="btn-secondary"
            >
              Download Resume
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {headlineTags.map((tag) => (
              <span
                key={tag}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-[40px] bg-slate-900/5 blur-3xl" />
          <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/60">
            <img
              src={IMG}
              alt="Nitin Sharma"
              className="h-130 w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
