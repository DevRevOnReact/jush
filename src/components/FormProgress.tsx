import React from 'react';
import { useFormContext } from '@/contexts/FormContext';
import { motion } from 'framer-motion';

export default function FormProgress() {
  const { currentStep } = useFormContext();
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div className="text-sm text-junzi-dark-gray dark:text-junzi-dark-gray mb-2 md:mb-0 transition-colors duration-300">
        Step <span className="font-medium">{currentStep}</span> of 7
      </div>
      <div className="flex items-center">
        <motion.div 
          className="text-yellow-500 dark:text-yellow-400 mr-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          ★★★★★
        </motion.div>
        <motion.div 
          className="text-sm text-junzi-dark-gray dark:text-junzi-dark-gray transition-colors duration-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Excellent 4.9/5
        </motion.div>
      </div>
    </div>
  );
}
