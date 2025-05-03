import { FileText } from "lucide-react";

interface ConfirmationMessageProps {
  title: string;
  message: string;
}

export const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({
  title,
  message,
}) => {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <div className="flex items-start space-x-3">
        <FileText className="w-5 h-5 text-blue-500 mt-0.5" />
        <div>
          <h4 className="font-medium text-blue-900">{title}</h4>
          <p className="text-sm text-blue-700 mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
}; 