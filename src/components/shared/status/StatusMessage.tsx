import { LucideIcon } from "lucide-react";

interface StatusMessageProps {
  variant: 'success' | 'info';
  icon: LucideIcon;
  title: string;
  message: string;
}

const variantStyles = {
  success: {
    container: "bg-green-50 border border-green-100",
    title: "text-green-700",
    message: "text-green-600",
    icon: "text-green-500",
  },
  info: {
    container: "bg-blue-50 border border-blue-100",
    title: "text-[#2757b3]",
    message: "text-blue-600",
    icon: "text-blue-500",
  },
};

export const StatusMessage: React.FC<StatusMessageProps> = ({
  variant,
  icon: Icon,
  title,
  message,
}) => {
  const styles = variantStyles[variant];

  return (
    <div className={`p-6 ${styles.container} rounded-lg`}>
      <h3 className={`font-medium ${styles.title} flex items-center justify-center mb-1`}>
        <Icon className={`w-5 h-5 mr-2 ${styles.icon}`} />
        {title}
      </h3>
      <p className={`text-sm ${styles.message}`}>
        {message}
      </p>
    </div>
  );
}; 