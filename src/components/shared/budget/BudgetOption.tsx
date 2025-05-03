import { BudgetRange } from "@/types/form";

interface BudgetOptionProps {
  id: BudgetRange;
  label: string;
  icon: (selected: boolean) => JSX.Element;
  borderColor: string;
  iconBg: string;
  isSelected: boolean;
  onSelect: (budget: BudgetRange) => void;
}

export const BudgetOption: React.FC<BudgetOptionProps> = ({
  id,
  label,
  icon,
  borderColor,
  iconBg,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(id)}
      className={`
        bg-white rounded-[20px] p-6 flex items-center gap-4 cursor-pointer transition-all
        border-2 hover:shadow-md
        ${isSelected ? `${borderColor} bg-blue-50` : "border-gray-100"}
      `}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
          isSelected ? iconBg : "bg-gray-100"
        }`}
      >
        {icon(isSelected)}
      </div>
      <span className="text-gray-800 text-base">{label}</span>
    </div>
  );
}; 