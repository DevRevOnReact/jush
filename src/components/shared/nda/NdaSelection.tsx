import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { NdaOption } from "@/types/form";

interface NdaSelectionProps {
  selectedOption?: NdaOption;
  onSelect: (option: NdaOption) => void;
}

export const NdaSelection: React.FC<NdaSelectionProps> = ({
  selectedOption,
  onSelect,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 bg-[#EEF2FF] rounded-[20px] p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <FileText size={20} className="text-gray-600" />
        <span className="text-gray-800 font-medium">
          Want an NDA emailed to you first?
        </span>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onSelect("yes")}
          className={`
            py-2 px-6 rounded-[10px] text-sm font-medium transition-all
            ${
              selectedOption === "yes"
                ? "bg-[#2757b3] text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }
          `}
        >
          Sure
        </button>

        <button
          onClick={() => onSelect("no")}
          className={`
            py-2 px-6 rounded-[10px] text-sm font-medium transition-all
            ${
              selectedOption === "no"
                ? "bg-[#2757b3] text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }
          `}
        >
          Not needed
        </button>
      </div>
    </motion.div>
  );
}; 