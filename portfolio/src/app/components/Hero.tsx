"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownCircle, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Code. Own. Maintain";
  const typingSpeed = 100;
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 px-[10%] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-background opacity-30"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 text-muted-foreground mb-6"
        >
          <Terminal className="h-4 w-4 mr-2 text-accent" />
          <span className="text-sm font-mono">
            Engineer from Kolkata, India
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block"
          >
            RICHIK
          </motion.span>
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block text-accent"
          >
            CHANDA
          </motion.span>
        </motion.h1>

        <div className="h-12 mb-6">
          <h2 className="text-xl md:text-2xl font-mono text-muted-foreground">
            <span className="terminal-prompt"></span>
            <span>{text}</span>
            <span ref={cursorRef} className="terminal-cursor"></span>
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-muted-foreground max-w-xl mb-8"
        >
          I am passionate about building products that are scalable, secure, and
          user-friendly, while trying to fill the void inside my knowledge
          bucket by learning new things with each passing day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap gap-4"
        >
          <Button
            asChild
            className="bg-accent hover:bg-accent/80 text-accent-foreground relative overflow-hidden group"
          >
            <a href="#work">
              <motion.span
                className="absolute inset-0 bg-white/20 skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              View Experience
              <Code className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10 relative overflow-hidden group"
          >
            <a href="#contact">
              <motion.span
                className="absolute inset-0 bg-accent/10 skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              Contact Me
              <Terminal className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Image with code overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 hidden lg:block"
      >
        <div className="relative w-full aspect-square max-w-md mx-auto">
          {/* Code blocks in background */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -top-8 -left-4 bg-card p-4 rounded-md shadow-lg border border-40 z-0 w-48"
          >
            <pre className="text-xs font-mono">
              <code>
                <span className="code-keyword">function</span>{" "}
                <span className="code-function">buildThings</span>() {"{"}
                <br />
                {"  "}
                <span className="code-keyword">return</span>{" "}
                <span className="code-string">'excellence'</span>;
                <br />
                {"}"}
              </code>
            </pre>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -bottom-4 -right-4 bg-card p-4 rounded-md shadow-lg border border-40 z-0 w-48"
          >
            <pre className="text-xs font-mono">
              <code>
                <span className="code-keyword">const</span> passion = {"{"}
                <br />
                {"  "}code: <span className="code-string">'always'</span>,
                <br />
                {"  "}learn: <span className="code-string">'forever'</span>
                <br />
                {"}"};
              </code>
            </pre>
          </motion.div>

          {/* Main image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ duration: 1, delay: 0.4 }}
            className="relative z-10 rounded-md overflow-hidden border border-40"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-linear-to-tr from-background via-background/40 to-transparent z-10"></div>
            <Image
              src="/me.jpg"
              alt="Richik Chanda"
              width={4011}
              height={3712}
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-muted-foreground text-sm font-mono mb-2">
          scroll down
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDownCircle className="h-6 w-6 text-accent" />
        </motion.div>
      </motion.div>
    </div>
  );
}
