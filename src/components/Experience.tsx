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
      "Lead CRM strategy and operations for 500+ offline retail stores, driving member acquisition, activation, and retention",
      "Partner closely with sales teams to design and execute in-store activation programs (referral events, tea sessions, expert days), improving hearing test appointment rate and final conversion",
      "Monitor real-time performance data by region, provide actionable insights and business recommendations to empower frontline sales teams",
    ],
  },
  {
    id: 2,
    title: "Assistant Consumer Activation Manager",
    company: "SHANGHAI DISNEY RESORT",
    location: "Shanghai, China",
    date: "July 2023 - October 2024",
    points: [
      "Set up strategies of paid media CTA and landings to improve media efficiency",
      "Improved member recruitment and purchaser conversion by strategically adjusting assets and landings",
      "Set up and launch CRM strategies to maintain consumer lifecycle operation and lift LTV with rolling and once-off activations",
    ],
  },
  {
    id: 3,
    title: "Assistant CRM Manager / Senior CRM Exec / CRM Exec",
    company: "DYSON CHINA",
    location: "Shanghai, China",
    date: "March 2019 - June 2023",
    points: [
      "Completed MT program with rotations across CRM functions",
      "Omni-channel CRM experience (WeChat D2C, TM/JD, Retail CRM), focused on data-driven member and owner operation with different focus according to each platform's characteristic",
      "Experienced in all stages of CRM lifecycle from recruitment to engagement to conversion to service",
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
