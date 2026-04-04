"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Globe, LineChart, Target, Building } from "lucide-react";

const skills = [
  {
    category: "Digital Marketing & CRM",
    icon: <LineChart className="w-5 h-5" />,
    items: ["Omni-channel CRM", "Loyalty Program Development", "Member Activation", "CRM Strategy", "Data-driven Marketing"],
  },
  {
    category: "Data & Technical Skills",
    icon: <Code className="w-5 h-5" />,
    items: ["Python", "Tableau", "SQL", "Data Processing", "Microsoft Office (PPT, Excel)"],
  },
  {
    category: "Certifications & Languages",
    icon: <Globe className="w-5 h-5" />,
    items: ["PMP Certificate", "Fluent English (BEC Higher)", "Native Mandarin"],
  },
];

const education = [
  {
    school: "National University of Singapore",
    degree: "Master of Social Science in Applied Economics",
    date: "Aug 2017 - Jan 2019",
  },
  {
    school: "Shanghai University of Finance and Economics",
    degree: "Bachelor of Management in E-Business",
    date: "Sep 2013 - Jul 2017",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
              <div className="w-16 h-1 bg-business-blue"></div>
            </motion.div>

            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center mb-4 text-business-blue">
                    {skillGroup.icon}
                    <h3 className="ml-3 text-lg font-bold text-gray-900">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-md border border-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
              <div className="w-16 h-1 bg-business-blue"></div>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-business-light rounded-bl-full -mr-8 -mt-8"></div>
                  <GraduationCap className="absolute top-4 right-4 w-6 h-6 text-business-blue opacity-50" />
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 pr-8">{edu.school}</h3>
                  <p className="text-business-blue font-medium mb-4">{edu.degree}</p>
                  <div className="inline-block px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full">
                    {edu.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
