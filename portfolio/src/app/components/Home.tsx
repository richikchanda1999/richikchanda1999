"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDownCircle } from "lucide-react"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col-reverse lg:flex-row w-full justify-between py-[5%] px-[10%] min-h-[90vh] items-center"
    >
      <div className="flex flex-col w-full lg:w-3/5">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col text-secondary text-4xl lg:text-8xl border-tertiary border-t-4 lg:border-t-0 border-b-4 pt-8 lg:pt-0 pb-8 w-full text-center lg:text-left"
        >
          <h1 className="font-light tracking-wide">RICHIK</h1>
          <h1 className="font-semibold tracking-wide">CHANDA</h1>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-tertiary font-semibold text-xl lg:w-4/5 mt-8"
        >
          Hi, I&apos;m Richik, an engineer from Kolkata, India. I love to build things that make a difference.
        </motion.h1>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-tertiary italic text-xl lg:w-4/5 mt-4"
        >
          I am passionate about building products that are scalable, secure, and user-friendly, while trying to fill the
          void inside my knowledge bucket by learning new things with each passing day.
        </motion.h1>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-tertiary text-xl lg:w-4/5 mt-4"
        >
          I am driven by the motto to{" "}
          <span className="font-bold text-secondary relative">
            build things that matter
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-light"></span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            See my work
            <ArrowDownCircle size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative w-full md:w-3/5 lg:w-1/3 pb-4 lg:pb-0 mx-auto lg:mx-0"
      >
        <div className="relative rounded-full overflow-hidden border-4 border-accent-light shadow-2xl">
          <Image
            alt="Richik Chanda"
            src="/me.jpg"
            width={4011}
            height={3712}
            className="rounded-full transition-all duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-accent-light/20 to-transparent rounded-full"></div>
        </div>
      </motion.div>
    </motion.div>
  )
}

