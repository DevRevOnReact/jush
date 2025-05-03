interface NavigationButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant: 'primary' | 'back';
  children?: React.ReactNode;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  onClick,
  disabled = false,
  variant,
  children
}) => {
  if (variant === 'back') {
    return (
      <button
        className="text-gray-500 hover:text-gray-700 transition-colors"
        onClick={onClick}
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
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}; 