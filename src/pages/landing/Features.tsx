import { motion, useAnimation } from "framer-motion";
import { FrownIcon } from "lucide-react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Features() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const challenges = [
    "Not knowing how to start developing your idea.",
    "Feeling overwhelmed by the technical aspects of development.",
    "Difficulty finding a team that understands your vision.",
    "Fear of wasting time and money on the wrong approach.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-black">
              Do You Have a Great App Idea but Dont Know Where to Start?
            </h2>
          </motion.div>
          <div className="space-y-8">
            <motion.p className="text-gray-600 text-lg" variants={itemVariants}>
              Feeling lost about where to begin can stop your idea from ever
              becoming a reality—discover how we can help you take the first
              step.
            </motion.p>
            <motion.div className="space-y-6" variants={containerVariants}>
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  variants={itemVariants}
                >
                  <FrownIcon className="w-8 h-8 text-[#5340FF] shrink-0 mr-2 bg-[#E2DFFA] p-1 rounded-full" />
                  <p className="text-gray-600">{challenge}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;