"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "CRM Manager",
    company: "AMPLIFON CHINA",
    location: "Shanghai, China",
    date: "May 2025 - Present",
    points: [
      "Execute consumer relationship strategies to drive direct conversion and loyalty through data-driven insights",
      "Lead marketing leads forecasting and implement MGM programs for new user acquisition",
      "Optimize user journeys across touchpoints to improve engagement and conversion rates",
    ],
  },
  {
    id: 2,
    title: "Assistant Consumer Activation Manager",
    company: "SHANGHAI DISNEY RESORT",
    location: "Shanghai, China",
    date: "July 2023 - October 2024",
    points: [
      "Develop landing pages and CTAs to support paid media strategy execution, improving member recruitment and conversion",
      "Optimize assets and landing pages to enhance user experience and conversion performance",
      "Execute CRM strategies to maintain consumer lifecycle operations and increase LTV",
    ],
  },
  {
    id: 3,
    title: "Assistant CRM Manager",
    company: "DYSON CHINA",
    location: "Shanghai, China",
    date: "July 2021 - June 2023",
    points: [
      "WeChat Mini-program Operations & Revamp: Led WeChat Mini-program revamp to enhance user experience; Integrated offline and online data to enable seamless user journey, attracting 100+ monthly orders from offline to online channels",
      "Lifecycle Content Campaign: Designed and executed lifecycle content strategy based on customer purchase cycles, delivering personalized content via WeChat Mini-program with product recommendations",
      "Cross-functional Collaboration: Coordinated with digital marketing, product, and tech teams to deliver Mini-program features",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Working Experience</h2>
          <div className="w-20 h-1 bg-business-blue mx-auto"></div>
        </motion.div>

        <div className="relative border-l border-gray-200 ml-3 md:ml-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 ml-8 md:ml-12 relative"
            >
              <span className="absolute -left-12 md:-left-16 flex items-center justify-center w-8 h-8 rounded-full bg-business-blue ring-4 ring-white">
                <Briefcase className="w-4 h-4 text-white" />
              </span>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-business-blue font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-business-light text-business-gray text-sm rounded-full font-medium">
                      {exp.date}
                    </span>
                    <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.points.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      <span className="-ml-2">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
