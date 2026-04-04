"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-business-blue font-semibold tracking-wide uppercase text-sm md:text-base mb-4">
            CRM Professional
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            XU FANJIE <span className="text-business-blue">(SUMMER)</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl text-gray-600 text-lg md:text-xl mb-10 flex flex-col gap-3"
        >
          <p>
            <strong>CRM Professional</strong> with <strong>7 years of experience</strong> in <strong>omni-channel</strong> including retail and online.
          </p>
          <p>
            Proven track record in <strong>loyalty program development</strong>, <strong>member activation</strong>, and <strong>data-driven marketing</strong>.
          </p>
          <p>
            Expertise in <strong>CRM strategy</strong>, and <strong>cross-functional collaboration</strong> to drive <strong>LTV</strong> and <strong>business growth</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#experience"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-business-blue hover:bg-blue-800 transition-colors shadow-sm hover:shadow-md"
          >
            View Experience
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="mailto:xufanjie95@hotmail.com"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
          >
            <Mail className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
