import { useInView } from "react-intersection-observer"
import { motion} from "framer-motion"
import { MessageCircle, FileText, Zap, TestTube, Rocket } from "lucide-react"
import React from "react"
import Link from "next/link"
import CalButton from "./CalButton"

const steps = [
  {
    icon: MessageCircle,
    title: "Initial Meeting",
    description: "Understanding your vision thoroughly and defining the project scope to ensure a clear direction.",
  },
  {
    icon: FileText,
    title: "Strategy & Planning",
    description: "Crafting a tailored and detailed approach that addresses all aspects of your project.",
  },
  {
    icon: Zap,
    title: "Accelerated Development",
    description:
      "Rapid design and development with continuous feedback loops to keep everything aligned with your vision.",
  },
  {
    icon: TestTube,
    title: "Testing & Refinement",
    description: "Rigorous testing and refinement to ensure flawless execution and an exceptional user experience.",
  },
  {
    icon: Rocket,
    title: "Launch in Just 4 Weeks & Support",
    description:
      "Seamlessly bring your product to market, with ongoing support for post-launch needs, including troubleshooting, feature updates, and user feedback management.",
  },
]

function ProcessTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end start"],
  // })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // const progressTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-start gap-16"
        >
          <motion.div
            variants={containerVariants}
            className="lg:w-[45%] space-y-6"
          >
            <motion.span
              variants={itemVariants}
              className="text-[#7C3AED] font-medium block"
            >
              How it works
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-[40px] leading-tight font-semibold text-[#111827]"
            >
              Our Streamlined Process for Bringing Your Vision to Life
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-lg"
            >
              Follow our simple, effective five-step process to turn your idea
              into a market-ready product. We ensure transparency,
              collaboration, and high-quality results every step of the way.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                href="/form"
                className="bg-black inline-flex justify-center items-center text-white hover:bg-gray-800 rounded-full px-6 h-12 text-base"
              >
                I&apos;m ready to Start
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="lg:w-[55%] relative"
          >
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  variants={itemVariants}
                  custom={index}
                  className="flex items-start mb-16 last:mb-0"
                >
                  {/* Icon */}
                  <motion.div
                    className="relative z-10"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.3,
                      type: "spring",
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#7C3AED]/[0.08] flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="ml-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold text-[#111827] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Timeline line segment */}
                {/* {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-6 w-[2px] bg-[#7C3AED]/20"
                    style={{
                      top: `${index * 160 + 90}px`,
                      height: "30px",
                    }}
                  >
                    <motion.div
                      className="w-full bg-[#7C3AED]"
                      style={{
                        height: progressTransform,
                      }}
                    />
                  </motion.div>
                )} */}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );}

  export default ProcessTimeline;