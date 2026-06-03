import React from "react";
import { motion } from "framer-motion";

const Page4 = () => {
  return (
    <section id="about" className="bg-slate-50 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
            About Me
          </p>
          <h2 className="mt-3 text-5xl font-semibold text-slate-950 sm:text-6xl">
            A full stack developer passionate about building reliable,
            user-focused web applications.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            I build interfaces that feel intuitive, accessible, and polished. I
            combine design clarity with technical consistency to create digital
            experiences that work well for users and stakeholders.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">
                What I Offer
              </h3>

              <ul className="mt-6 space-y-4 text-slate-600">
                <li className="flex gap-3 leading-7">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                  Scalable full-stack web application development.
                </li>

                <li className="flex gap-3 leading-7">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                  Secure APIs and efficient backend architecture.
                </li>

                <li className="flex gap-3 leading-7">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                  Modern, responsive, and user-focused interfaces.
                </li>

                <li className="flex gap-3 leading-7">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                  Real-time systems, databases, and cloud deployment.
                </li>
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Experience
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  2+ years building web apps
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Focus
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  Scalable, user-friendly web applications with clean design and
                  efficient backend systems.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm"
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:nitinprof09@gmail.com"
                  className="mt-3 block text-lg font-semibold text-slate-950 hover:text-slate-700"
                >
                  nitinprof09@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Instagram
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  @__nitin._.09__
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  GitHub
                </p>
                <a
                  href="https://github.com/nitin9706"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-lg font-semibold text-slate-950 hover:text-slate-700"
                >
                  github.com/nitin9706
                </a>
              </div>
            </div>

            <a
              href="mailto:nitinprof09@gmail.com"
              className="btn-primary mt-8 inline-flex w-full justify-center"
            >
              Send a message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Page4;
