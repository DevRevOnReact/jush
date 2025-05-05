interface NavigationButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant: 'primary' | 'back';
  children?: React.ReactNode;
  eventName?: string;
  eventData?: Record<string, any>;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  onClick,
  disabled = false,
  variant,
  children,
  eventName,
  eventData
}) => {
  const handleClick = () => {
    // Send event to Google Tag Manager if eventName is provided
    if (eventName && typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventData
      });
    }
    
    // Call the original onClick handler
    onClick();
  };

  if (variant === 'back') {
    return (
      <button
        className="text-gray-500 hover:text-gray-700 transition-colors"
        onClick={handleClick}
      >
        ←
      </button>
    );
  }

  return (
    <button
      className={`px-8 py-2.5 rounded-xl transition-colors ${
        disabled
          ? "opacity-50 cursor-not-allowed bg-[#6B8EE7] text-white"
          : "bg-[#2757b3] text-white hover:bg-[#224a96]"
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}; 