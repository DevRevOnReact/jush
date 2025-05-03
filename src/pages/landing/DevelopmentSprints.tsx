import { ClipboardList, Users, MessageSquare, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link";
import CalComponent from "./CalComponent";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export function DevelopmentSprints() {
  const features = [
    {
      icon: ClipboardList,
      title: "Guidance from Idea to Launch",
      description: "Step-by-step support to bring your concept to life.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "A dedicated team to make your vision a reality.",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "Ongoing collaboration throughout the entire process.",
    },
    {
      icon: Shield,
      title: "Project Confidence",
      description: "Assurance that your project is managed by experts.",
    },
  ]

  const [headerRef, headerInView] = useInView({ triggerOnce: false, threshold: 0.1 })
  const [imageRef, imageInView] = useInView({ triggerOnce: false, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: false, threshold: 0.1 })

  return (
    <section className="bg-[#0f1117] py-24" id="work">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Custom Development Sprints Ensure Rapid and Precise Delivery.
          </h2>
          <p className="text-gray-400">
            Now you can focus on scaling your business while we handle the rest.
          </p>
        </motion.div>

        {/* Features Grid and Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
          <motion.div
            ref={imageRef}
            className="relative w-full h-full overflow-hidden rounded-3xl mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              imageInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6 }}
          >
            <img
              src="/devsprints1.png"
              alt="Dashboard preview"
              className="hidden md:block w-full !max-w-full h-full object-cover bg-slate-100 py-4"
              // style={{ clipPath: "inset(0 30% 0 0)" }}
            />
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-[#222529] rounded-3xl px-4 md:px-12 py-24 max-w-7xl mx-auto overflow-hidden shadow-lg">
          {/* Background Patterns */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0">
              <img
                src="https://cdn.prod.website-files.com/610899a0035d5fa11ed916d7/6706ad42dfd5efeadbbd0998_pattern-cta-v2-brix-templates-01.svg"
                alt="Decorative Pattern"
                className="w-60 opacity-25"
              />
            </div>
            <div className="absolute bottom-0 right-0">
              <img
                src="https://cdn.prod.website-files.com/610899a0035d5fa11ed916d7/66fef90f75f453068b6c778a_pattern-cta-v2-brix-templates-02.svg"
                alt="Decorative Pattern"
                className="w-60 h-auto opacity-25"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative text-center">
            <h2 className="text-white text-4xl font-bold mb-6">
              Your Vision, Brought to Life in Just 4 Weeks
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              In this free 30-minute call, we’ll help you visualize your
              software, create a simple prototype, and guide you on the next
              steps—quick and easy.
            </p>
            {/* <Link
              href="https://cal.com/artifex"
              target="_blank"
              className="bg-white text-black hover:bg-gray-100 px-6 py-6 rounded-3xl"
            >
              I am ready to start!
            </Link> */}
            <CalComponent />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className="space-y-4 px-6 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-white border border-white flex items-center justify-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <feature.icon className="w-7 h-7 text-[#8B5CF6] " />
      </motion.div>
      <div>
        <motion.h3
          className="text-xl font-semibold text-white mb-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {feature.title}
        </motion.h3>
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {feature.description}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default DevelopmentSprints;

