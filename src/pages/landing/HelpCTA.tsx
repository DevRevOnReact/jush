import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
function HelpCTA() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="space-y-4 max-w-2xl">
            <motion.h3
              className="text-sm font-semibold text-[#656d8a] uppercase tracking-wider"
              variants={itemVariants}
            >
              NOT SURE YET?
            </motion.h3>
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-black"
              variants={itemVariants}
            >
              We are here to help with whatever question you might have.
            </motion.h2>
          </div>
          <motion.div variants={itemVariants}>
            <div className="transform transition-transform hover:scale-105 active:scale-95">
            <Link 
                href="/form"
                className="bg-[#1a1b1f] text-white hover:bg-[#2a2b2f] px-8 py-6 text-lg rounded-full transform transition-transform hover:scale-105 active:scale-95"
              >
                I Want to Learn More
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HelpCTA;