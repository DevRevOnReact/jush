import { PlatformType } from "@/types/form";

interface PlatformCardProps {
  id: PlatformType;
  name: string;
  icon: JSX.Element;
  isSelected: boolean;
  onSelect: (id: PlatformType) => void;
}

export const PlatformCard: React.FC<PlatformCardProps> = ({
  id,
  name,
  icon,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`
        bg-white rounded-[20px] py-12 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all
        border shadow-sm hover:shadow-md
        ${isSelected ? "border-[#2757b3] bg-blue-50" : "border-gray-100"}
      `}
      onClick={() => onSelect(id)}
    >
      {icon}
      <span className="font-medium text-gray-700 text-base">{name}</span>
    </div>
  );
}; 