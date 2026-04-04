"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Summary</h2>
          <div className="w-20 h-1 bg-business-blue mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-600 leading-relaxed text-justify md:text-center">
            With 7 years of experience as a CRM Professional, my expertise spans omni-channel strategies, 
            encompassing both retail and online environments. I have a proven track record in driving business 
            growth and improving Customer Lifetime Value (LTV) through loyalty program development, member 
            activation, and data-driven marketing. I excel in implementing robust CRM strategies and leading 
            cross-functional collaborations to deliver measurable impact across various digital and physical touchpoints.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
