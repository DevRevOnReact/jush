
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Brands() {
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

  const brandLogos = [
    { src: "/AstroAI.png", alt: "HBO", className: "h-10 rounded-md" },
    { src: "/fitnest.png", alt: "Netflix", className: "h-8" },
    { src: "/life time natty.png", alt: "Toptal", className: "h-4" },
    { src: "/boston e bikes.svg", alt: "Doordash", className: "h-6" },
    { src: "/PhoniAI.png", alt: "Amazon", className: "h-10 rounded-md" },
    { src: "/PTB.jpg", alt: "Amazon", className: "h-10 rounded-md" },
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-[#F3F3F3] w-full p-10 h-fit">
      <motion.section
        ref={ref}
        className=" mb-8 flex items-center lg:flex-row md:items-center gap-4 flex-col justify-between px-6 container max-w-7xl mx-auto h-fit"
        id="brands"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h3
          className="text-xl text-center  text-black font-semibold"
          variants={itemVariants}
        >
          Trusted by leading brands
        </motion.h3>
        <div className="flex h-fit gap-8 items-center justify-center opacity-70 flex-wrap">
          {brandLogos.map((logo) => (
            <motion.img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className={logo.className}
              variants={itemVariants}

            />
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default Brands;