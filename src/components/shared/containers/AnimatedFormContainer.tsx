import { motion } from "framer-motion";

interface AnimatedFormContainerProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const AnimatedFormContainer: React.FC<AnimatedFormContainerProps> = ({
  children,
  title,
  subtitle
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full px-8 py-6"
    >
      {title && <h1 className="text-black font-semibold mb-4 text-2xl">{title}</h1>}
      {subtitle && <p className="text-black mb-6">{subtitle}</p>}
      {children}
    </motion.div>
  );
}; 