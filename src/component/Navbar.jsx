import React, { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skill" },
  { name: "Projects", id: "project" },
  { name: "About", id: "about" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const top = section.offsetTop - 140;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="nav-float pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-slate-200 bg-white/95 px-5 py-3 shadow-xl shadow-slate-200/40 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white ring-1 ring-slate-900/10">
            NS
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Nitin Sharma</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Web & Cloud Professional
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <nav>
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`text-sm font-medium transition ${
                      active === link.id
                        ? "text-slate-950"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="/Nitin_Sharma_Resume.pdf"
            download="Nitin_Sharma_Resume.pdf"
            className="btn-primary mt-2 text-center"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-slate-900"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <ImCross size={22} /> : <RiMenu3Line size={24} />}
        </button>
      </div>

      <div
        className={`absolute left-4 right-4 top-24 overflow-hidden rounded-3xl border border-slate-200 bg-white/95 px-5 py-4 shadow-xl shadow-slate-200/30 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80 flex" : "max-h-0 hidden"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`text-sm transition ${
                active === link.id
                  ? "text-slate-900 font-semibold"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Nitin_Sharma_Resume.pdf"
            download="Nitin_Sharma_Resume.pdf"
            className="btn-primary mt-2 text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
