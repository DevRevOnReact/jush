import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface Feature {
  number: string;
  title: string;
  description: string;
  image: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}


function ExpertFeatures() {
  const features = [
    {
      number: "01",
      title: "Dedicated Teams",
      description:
        "Designers and developers committed to bringing your vision to life—no distractions, no compromises.",
      image: "/feature1.png",
    },
    {
      number: "02",
      title: "Rapid Turnaround",
      description: "Concept to launch in 4 weeks, empowering you to start making an impact sooner.",
      image: "/feature2.png",
    },
    {
      number: "03",
      title: "Seamless Integration",
      description: "We ensure new products fit into your ecosystem perfectly—so you can grow without disruptions.",
      image: "/feature3.png",
    },
    {
      number: "04",
      title: "Fixed Price & Transparency",
      description: "Complete development for just $10k—no hidden fees, just results.",
      image: "/feature4.png",
    },
  ]

  const [headerRef, headerInView] = useInView({ triggerOnce: false, threshold: 0.1 })

  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          ref={headerRef}
          className="text-3xl lg:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Get Ready to Launch with Our Expert Development Features
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className="space-y-4 rounded-[16px]"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="relative h-[250px] rounded-[16px] overflow-hidden"
        initial={{ scale: 0.9 }}
        animate={inView ? { scale: 1 } : { scale: 0.9 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
      >
        <motion.div
          className="w-fit absolute top-[55px] left-[10px] z-10 bg-black text-white text-2xl font-bold py-2 px-4 rounded-[12px] border border-white bottom-2"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
        >
          {feature.number}
        </motion.div>
        <img
          src={feature.image || "/placeholder.svg"}
          alt={feature.title}
          className="object-cover w-full h-full !max-w-full rounded-[16px]"
        />
      </motion.div>
      <motion.h3
        className="text-xl font-bold"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
      >
        {feature.title}
      </motion.h3>
      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
      >
        {feature.description}
      </motion.p>
    </motion.div>
  );
}

export default ExpertFeatures;