"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Terminal, Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#skills", label: "SKILLS" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#work", label: "EXPERIENCE" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-40 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center justify-between px-[5%] md:px-[10%] mx-auto max-w-7xl">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#"
            className="font-mono text-xl text-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2"
          >
            <Terminal className="h-5 w-5" />
            <span>rc@dev</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="hidden sm:inline-block text-accent"
            >
              ~$
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 0.5,
              }}
              className="inline-block h-4 w-2 bg-accent ml-1"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
            >
              <Link
                href={link.href}
                className="font-mono text-sm text-foreground hover:text-accent transition-all duration-300 relative group"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                  initial={{ width: 0 }}
                />
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="flex items-center gap-4 ml-4"
          >
            <motion.a
              href="https://github.com/richikchanda1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/richikchanda1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-40"
        >
          <div className="flex flex-col items-center py-4 gap-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-foreground font-mono text-sm py-2 relative group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                    initial={{ width: 0 }}
                  />
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex items-center gap-6 mt-2"
            >
              <motion.a
                href="https://github.com/richikchanda1999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/richikchanda1999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
