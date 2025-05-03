import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  icon?: LucideIcon;
  children: React.ReactNode;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  variant,
  onClick,
  icon: Icon,
  children,
}) => {
  const baseStyles = "transition-colors flex items-center space-x-2";
  const variantStyles = {
    primary: "bg-[#2757b3] text-white px-6 py-2.5 rounded-md hover:bg-[#224a96]",
    secondary: "text-gray-500 hover:text-gray-700 px-4 py-2.5 rounded-md border border-gray-300 hover:bg-gray-50",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
}; 