"use client";

import { motion } from "framer-motion";
import { TrendingUp, Smartphone, RefreshCw, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Member Festival Live-Stream",
    company: "Disney",
    date: "Aug 2024 - Sep 2024",
    icon: <TrendingUp className="w-6 h-6 text-business-blue" />,
    points: [
      "Optimized live-stream traffic through paid media and CRM SMS activation, boosting viewership and coupon redemption",
      "Achieved 15K direct viewer UV with CPUV ~RMB13 (below industry average), helped WeChat Channel promote live-stream with 800K total viewership",
      "Set CRM SMS activations for existing consumers, resulting in 15% coupon redemption rate",
    ],
  },
  {
    id: 2,
    title: "WeChat Mini-program Revamp",
    company: "Dyson",
    date: "Jul 2022 - Nov 2022",
    icon: <Smartphone className="w-6 h-6 text-business-blue" />,
    points: [
      "Led WeChat Mini-program update for better user experience and traffic optimization",
      "Connected offline and online data to enable offline-to-online conversion, attracting 100+ monthly orders",
      "Optimized Mini-program interface highlighting consumer benefits and brand contents, increasing related page UV",
    ],
  },
  {
    id: 3,
    title: "Trade-in/Up Program Launch",
    company: "Dyson",
    date: "Jun 2022 - Sep 2022",
    icon: <RefreshCw className="w-6 h-6 text-business-blue" />,
    points: [
      "Led multi-functional coordination for trade-in/up program launch, including internal stakeholders and external partners",
      "Introduced Aihuishou as trade-in partner for Dyson's own program",
      "Achieved 700+ sell-outs accounting for 60% of relevant SKU sales",
    ],
  },
  {
    id: 4,
    title: "Loyalty Program Revamp",
    company: "Dyson",
    date: "Sep 2021 - Jun 2022",
    icon: <Star className="w-6 h-6 text-business-blue" />,
    points: [
      "Worked with internal/external parties to seek opportunities for loyalty program improvement",
      "Collaborated with Consumer Insight team to identify consumer needs and support program development",
      "Coordinated cross-functional teams to implement designed benefits and loyalty schemes",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Projects</h2>
          <div className="w-20 h-1 bg-business-blue mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-business-light group-hover:bg-business-blue transition-colors duration-300"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-business-light rounded-lg flex items-center justify-center">
                  {project.icon}
                </div>
                <div className="text-right">
                  <span className="block text-business-blue font-bold text-sm uppercase tracking-wider">{project.company}</span>
                  <span className="text-gray-500 text-sm">{project.date}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
              
              <ul className="space-y-3">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-business-blue mr-2 mt-1">•</span>
                    <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
