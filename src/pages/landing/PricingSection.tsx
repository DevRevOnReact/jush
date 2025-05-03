import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import CalButton from "./CalButton";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isDark: boolean;
  isPopular?: boolean;
}

interface PricingCardProps {
  plan: Plan;
  index: number;
}

function PricingSection() {
  const plans = [
    {
      name: "Design",
      price: "7,000",
      description:
        "Get a beautiful, user-centered design for your app or website.",
      features: [
        "User-centered design approach.",
        "Custom visuals tailored to your brand.",
        "Wireframes and prototypes included.",
        "Responsive design for all devices.",
        "Design revisions to ensure satisfaction.",
      ],
      isDark: false,
    },
    {
      name: "Development",
      price: "10,000",
      description:
        "Full development of your app with a fixed price and clear timeline.",
      features: [
        "Full-stack development for web or mobile.",
        "Clean, scalable code.",
        "Integration with existing tools.",
        "Testing and debugging included.",
        "Clear timeline with milestones.",
      ],
      isDark: false,
    },
    {
      name: "Full-Service Package",
      price: "15,000",
      description: "Complete end-to-end service from design to launch.",
      features: [
        "Complete design and development package.",
        "Seamless integration between design and development teams.",
        "End-to-end project management.",
        "Testing and quality assurance.",
        "Post-launch support included.",
      ],
      isDark: true,
      isPopular: true,
    },
  ];

  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4" id="pricing">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
            OUR PRICING
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1b1f] mb-4">
            Choose the Right Plan for Your Needs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
            egestas morbi sem vulputate etiam facilisis pellentesque ut quis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }: PricingCardProps) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col rounded-3xl p-8 ${
        plan.isDark ? "bg-[#1a1b1f] text-white" : "bg-white border"
      } relative`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {plan.isPopular && (
        <motion.span
          className="absolute top-4 right-6 md:top-8 md:right-8 bg-white text-black px-4 py-1 rounded-full text-sm font-medium"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
        >
          Popular
        </motion.span>
      )}

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
      >
        <h3
          className={`text-xl font-semibold mb-2 mt-2 ${
            plan.isDark ? "text-gray-300" : "text-black"
          }`}
        >
          {plan.name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span
            className={`text-4xl font-bold ${
              plan.isDark ? "text-gray-300" : "text-black"
            }`}
          >
            ${plan.price}
          </span>
        </div>
        <p
          className={`mt-4 mb-10 text-md font-thin ${
            plan.isDark ? "text-white" : "text-gray-400"
          }`}
        >
          {plan.description}
        </p>
      </motion.div>

      <div
        className={`h-[1px] w-full mb-10 ${
          plan.isDark ? "bg-white" : "bg-gray-400"
        }`}
      ></div>

      <motion.div
        className="space-y-4 mb-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
      >
        {plan.features.map((feature, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.4 + i * 0.1 }}
          >
            <div
              className={`w-6 h-6 rounded-full flex justify-center items-center mr-2 ${
                plan.isDark ? " bg-white" : " bg-black "
              }`}
            >
              <Check
                className={`w-5 h-5 rounded-full ${
                  plan.isDark ? "text-black " : "text-white "
                }`}
              />
            </div>

            <span className={plan.isDark ? "text-gray-300" : "text-gray-600"}>
              {feature}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
        className="flex-grow-1"
      >
         <Link
          href="/form"
          className={`text-center block w-full rounded-full py-6 ${
            plan.isDark
              ? "bg-white text-black hover:bg-gray-100"
              : "bg-[#1a1b1f] text-white hover:bg-[#2a2b2f]"
          }`}
        >
          I am Ready to Start
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default PricingSection;