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
            With over 5 years in digital marketing and CRM, I specialize in WeChat Mini-program operations, 
            lifecycle management, and Tencent ecosystem integration. My expertise lies in Mini-program optimization, 
            content-based lifecycle campaigns, and cross-functional collaboration. I am passionate about optimizing 
            user journeys across touchpoints to improve engagement, conversion rates, and overall customer lifetime value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
