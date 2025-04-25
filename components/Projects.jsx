"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  SiPython,
  SiMysql,
  SiApachecassandra,
  SiApachekafka,
  SiDocker,
  SiApacheairflow,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiScikitlearn,
  SiPostgresql,
  SiApachespark,
} from "react-icons/si";
import { FaAws} from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { ExternalLink, Code, Eye } from "lucide-react"


export default function Projects() {
  const [activeTab, setActiveTab] = useState ("fullstack")
  const [, setHoveredIndex] = useState (null)

  const projects = {
    fullstack: [
      {
        title: "Multi-Modal Predictive Models for Personalized Treatment",
        url: "http://Eleweight.in",
        imageUrl: `https://assets-global.website-files.com/63d4531932241e0aea882839/64a84e1c0200796d9b0dd7c6_GMAI-Model-Pipeline.webp`,
        github: "https://github.com/patel-mark/Multi-Modal-Predictive-Models-for-Personalized-Treatment-.git",
        techStack: ["Tensorflow", "Python", "Opencv", "Docker"],
      },
      {
        title: "Algorithmic Trading Strategy using Backtesting Risk Analysis",
        url: "http://Satya-check.vercel.app",
        imageUrl: `https://pbs.twimg.com/media/GoQUKMeWcAAAioD?format=jpg&name=medium`,
        github: "https://github.com/21prnv/SatyaCheck",
        techStack: ["PyTorch","Scikit-learn","Python"],
      },
      {
        title: " Real-Time Recommendation System with Reinforcement Learning",
        url: "https://github.com/patel-mark/Real-Time-Recommendation-System-with-Reinforcement-Learning.git",
        imageUrl: `https://th.bing.com/th/id/OIP.AC8JfGbRnYplip_BOgdEmwHaE8?rs=1&pid=ImgDetMain`,
        github: "https://github.com/patel-mark/Real-Time-Recommendation-System-with-Reinforcement-Learning.git",
        techStack: ["PyTorch","Python","Docker"],
      },
    ],
    mini: [
      {
        title: "Petabyte-Scale User Behavior Analytics Platform",
        url: "https://github.com/patel-mark/Petabyte-Scale-User-Behavior-Analytics-Platform.git",
        imageUrl: `https://miro.medium.com/max/1200/1*shhoBn8i_tSwSZR6dH9ziA.jpeg`,
        github: "https://github.com/patel-mark/Petabyte-Scale-User-Behavior-Analytics-Platform.git",
        techStack: ["Apache Kafka", "Apache Airflow", "Apache Cassandra", "Docker"],
      },
      {
        title: "Data Warehouse and Analytics Project",
        url: "https://github.com/patel-mark/Data-Warehouse-and-Analytics-Project.git",
        imageUrl: `https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:teqfooxfaih4256sg7qxwy7t/bafkreibry2g23jq3tpjurnx3b6enyzkwgzfnp7p6xcjcsdmbz2klm56qoa@jpeg`,
        github: "https://github.com/patel-mark/Data-Warehouse-and-Analytics-Project.git",
        techStack: ["MySQL"],
      },
    ],
    landing: [
      {
        title: "User Behavior Analysis for Streaming Platform Retention",
        url: "https://github.com/patel-mark/User-Behavior-Analysis-for-Streaming-Platform-Retention.git",
        imageUrl: `https://www.similarweb.com/blog/wp-content/uploads/2021/09/Molly-SW-Blog-Cover-Image-Rebrand-2-768x455.png`,
        github: "https://github.com/patel-mark/User-Behavior-Analysis-for-Streaming-Platform-Retention.git",
        techStack: ["Apache Spark", "PostgreSQL", "Scikit-learn"],
      },
      {
        title: "Russian Wine Market Expansion: Regional Similarity Analysis to Saint Petersburg",
        url: "https://github.com/patel-mark/Russian-Wine-Market-Expansion-Regional-Similarity-Analysis-to-Saint-Petersburg.git",
        imageUrl: `https://www.thethrive.in/wp-content/uploads/2020/08/20082020-7.jpg`,
        github: "https://github.com/patel-mark/Russian-Wine-Market-Expansion-Regional-Similarity-Analysis-to-Saint-Petersburg.git",
        techStack: ["MySQL","Power BI"],
      },
    ],
  }

  const getTechIcon = (tech) => {
    switch (tech) {
      case "Python":
        return <SiPython className="text-yellow-400" />;
      case "MySQL":
        return <SiMysql className="text-blue-500" />;
      case "PostgreSQL":
        return <SiPostgresql className="text-blue-700" />;
      case "Microsoft SQL Server":
        return <SiMicrosoftsqlserver className="text-red-600" />;
      case "Apache Cassandra":
        return <SiApachecassandra className="text-purple-600" />;
      case "Presto":
        return <SiPresto className="text-indigo-500" />;
      case "Apache Kafka":
        return <SiApachekafka className="text-orange-400" />;
      case "Docker":
        return <SiDocker className="text-blue-600" />;
      case "AWS":
        return <SiAmazonaws className="text-orange-500" />;
      case "Tableau":
        return <SiTableau className="text-blue-400" />;
      case "Power BI":
        return <MdBarChart className="text-yellow-500" />;
      case "Apache Airflow":
        return <SiApacheairflow className="text-blue-500" />;
      case "PyTorch":
        return <SiPytorch className="text-orange-600" />;
      case "Tensorflow":
        return <SiTensorflow className="text-orange-500" />;
      case "Opencv":
        return <SiOpencv className="text-red-500" />;
      case "Scikit-learn":
        return <SiScikitlearn className="text-yellow-600" />;
      case "Apache Spark":
        return <SiApachespark className="text-orange-700" />;
      default:
        return <SiApachespark className="text-orange-700" />;
    }
  }

  return (
    <section id="projects" className="py-20 pt-0 bg-black text-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
        <motion.div
          className="text-4xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-[#f1f5f966] via-[#f1f5f9] via-51% to-[#f1f5f966] text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          
          <h2 className="text-3xl md:text-5xl text-white lg:text-6xl font-bold relative inline-block">
            My <span className="text-blue-500">Projects</span>
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
        </motion.div>
          <p className="text-gray-400  max-w-lg mx-auto text-sm md:text-base sm:mt-8">
          A portfolio highlighting full-spectrum data projects — including data engineering pipelines, machine learning models, and interactive dashboards for real-world insights.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center rounded-xl mb-10">
          <div className="inline-flex p-1 bg-gray-900/50 rounded-xl">
            {(["fullstack", "mini", "landing"]).map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-blue-500 text-white shadow-lg rounded-xl shadow-blue-500/20"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "fullstack" ? "Data Science Projects" : tab === "mini" ? "Data Engineering Projects" : tab === "landing" ? "Data Analytics Projects":null}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects[activeTab].map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 h-full transition-all duration-300  hover:shadow-lg hover:shadow-blue-500/10">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>

                  {/* Action buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      aria-label={`Visit ${project.title}`}
                    >
                      <Eye className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      aria-label={`View code for ${project.title}`}
                    >
                      <Code className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                      aria-label={`External link to ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-gray-500 text-xs mb-3 truncate">{project.url.replace("http://", "")}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 bg-gray-800/50 px-2 py-0.5 rounded-md text-xs font-medium text-gray-300"
                      >
                        <span className="text-base">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects button */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/patel-mark"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 text-sm"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}