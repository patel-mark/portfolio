"use client"

import React from "react";
import { motion } from "framer-motion";
import { 
  SiPython,
  SiPostgresql,
  SiApachecassandra,
  SiDocker,
  SiApacheairflow,
  SiPytorch,
  SiScikitlearn,
  SiApachespark,
} from "react-icons/si";
import { FaAws} from "react-icons/fa";
import { MdBarChart } from "react-icons/md";




const Skills = () => {
  const skills = [
    { name: "Python", icon: SiPython, color: "text-yellow-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
    { name: "Power BI", icon: MdBarChart, color: "text-yellow-500" },
    { name: "Scikit-Learn", icon: SiScikitlearn, color: "text-blue-500" },
    { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
    { name: "Cassandra", icon: SiApachecassandra, color: "text-indigo-500" },
    { name: "Airflow", icon: SiApacheairflow, color: "text-blue-300" },
    { name: "Spark", icon: SiApachespark, color: "text-orange-600" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "AWS", icon: FaAws, color: "text-orange-400" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="relative py-16 md:py-24 text-white w-full">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 relative inline-block">
            Tech <span className="text-blue-500">Stack</span>
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Technologies I use to build modern Data solutions
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Define types for SkillCard component props

const SkillCard = ({ skill }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -5, scale: 1.03 }}
      className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl overflow-hidden group"
    >
      <div className="p-4 md:p-6 flex flex-col items-center justify-center h-full">
        <div 
          className={`text-4xl md:text-5xl lg:text-6xl ${skill.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <skill.icon />
        </div>
        
        <h3 className="text-sm md:text-base font-medium text-center">{skill.name}</h3>
      </div>
    </motion.div>
  );
};

export default Skills;