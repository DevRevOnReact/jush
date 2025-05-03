"use client"

import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface CapabilitySection {
  title: string
  items: string[]
}

function Capabilities() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const capabilities: CapabilitySection[] = [
    {
      title: "Strategy",
      items: ["Research", "UI/UX audit", "Stakeholder workshops", "Product strategy", "Innovation consulting"],
    },
    {
      title: "Design",
      items: ["UI/UX design", "Brand identity", "Websites and mobile apps", "Visual design", "Prototyping and testing"],
    },
    {
      title: "Development",
      items: ["HTML/CSS/JS", "React/Angular", "Backend/API integrations", "iOS/Android native apps", "Web 3.0"],
    },
    {
      title: "Marketing",
      items: ["Copywriting", "Video / Animation", "Graphics / Photography", "Messaging", "Ad / Social Media"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section className="py-24 px-4 bg-white overflow-hidden text-black" ref={ref}>
      <motion.div
        className="container mx-auto px-4 max-w-6xl flex flex-col lg:flex-row lg:justify-between"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2 className=" text-5xl font-semibold text-start mb-6 lg:w-1/2" variants={titleVariants}>
          Our <span className="text-emerald-400">Capabilities</span>
        </motion.h2>

        <div className="flex flex-wrap gap-2 lg:w-1/2 text-black">
          {capabilities.map((section, index) => (
            <motion.div key={index} variants={sectionVariants} className="p-2 mb-8">
              <motion.h3
                className="text-2xl font-bold mb-6 text-black"
                variants={itemVariants}
                whileHover={{ scale: 1.05, color: "#10B981" }}
                transition={{ duration: 0.2 }}
              >
                {section.title}
              </motion.h3>
              <motion.div className="space-y-4 text-lg" variants={containerVariants}>
                {section.items.map((item, itemIndex) => (
                  <motion.p
                    key={itemIndex}
                    className="text-gray-600"
                    variants={itemVariants}
                    whileHover={{ x: 5, color: "#374151" }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Capabilities;