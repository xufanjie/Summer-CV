"use client";

import { motion } from "framer-motion";
import { TrendingUp, Smartphone, RefreshCw, Star, Gift } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Member Festival Live-Stream Traffic Optimization",
    company: "Disney",
    date: "Aug 2024 - Sep 2024",
    icon: <TrendingUp className="w-6 h-6 text-business-blue" />,
    points: [
      "Led CRM-driven live-stream campaign to activate existing members and acquire new users via paid media and WeChat ecosystem",
      "Designed segmented SMS activation strategy (pre-event engagement + post-event conversion reminder), improving coupon redemption rate to 15% (highest in Disney ODC channel)",
      "Drove 800K+ viewership and 15K high-quality users, significantly exceeding historical benchmarks",
      "Leveraged CRM insights to optimize traffic allocation and improve conversion efficiency across channels",
    ],
  },
  {
    id: 2,
    title: "WeChat Red Packet Campaign",
    company: "Disney",
    date: "Dec 2023 - Feb 2024",
    icon: <Gift className="w-6 h-6 text-business-blue" />,
    points: [
      "Spearheaded end-to-end CRM campaign via WeChat Mini Program, integrating social platforms (Xiaohongshu, Douyin, Weibo) for omni-channel acquisition",
      "Acquired 100K+ new followers and generated 1M+ user engagements, exceeding growth KPIs",
      "Collaborated with product, tech, and creative teams to launch interactive “Family Portrait” feature, enhancing user engagement and shareability",
      "Strengthened private traffic pool through social-driven CRM activation strategy",
    ],
  },
  {
    id: 3,
    title: "Trade-in/up Program",
    company: "Dyson",
    date: "Jun 2022 - Sep 2022",
    icon: <RefreshCw className="w-6 h-6 text-business-blue" />,
    points: [
      "Led cross-functional execution of trade-in campaign across Supply Chain, Marketing, Finance, and Sales",
      "Designed multi-channel CRM communication strategy (stores, mini-program, paid media, SMS), achieving ~60% sales contribution from campaign SKUs, 700+ units sold",
      "Introduced membership-based trade-in incentives to enhance customer retention and conversion",
    ],
  },
  {
    id: 4,
    title: "Loyalty Program Revamp",
    company: "Dyson",
    date: "Sep 2021 - Jun 2022",
    icon: <Star className="w-6 h-6 text-business-blue" />,
    points: [
      "Redesigned CRM loyalty program based on customer insights and lifecycle analysis, and created a layered membership project while aligning with global strategy",
      "Partnered with Consumer Insight team to identify user needs and optimize membership benefits structure",
      "Collaborated with cross-functional teams to implement loyalty mechanics and improve member engagement",
      "Enhanced CRM-driven retention strategy by aligning benefits with customer value segments",
    ],
  },
  {
    id: 5,
    title: "WeChat Mini-program Revamp",
    company: "Dyson",
    date: "Jul 2022 - Nov 2022",
    icon: <Smartphone className="w-6 h-6 text-business-blue" />,
    points: [
      "Optimized WeChat Mini Program to improve CRM-driven user journey and conversion funnel",
      "Integrated online-offline data to enable seamless member experience and traffic redirection, resulting in 100+ incremental units sales from O2O",
      "Increased user session duration by 15% through improved UX and content personalization",
      "Supported CRM campaigns with enhanced digital touchpoints",
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
              className={`bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group ${
                projects.length % 2 !== 0 && index === projects.length - 1 ? 'md:col-span-2 md:max-w-2xl md:mx-auto w-full' : ''
              }`}
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
