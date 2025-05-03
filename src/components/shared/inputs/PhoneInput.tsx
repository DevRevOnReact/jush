import type { PhoneInputProps } from "react-phone-input-2";
import PhoneInputComponent from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "@/styles/phone-input.css";
import { Country } from "@/types/form";

const BasePhoneInput = PhoneInputComponent as React.ComponentType<PhoneInputProps>;

interface CustomPhoneInputProps {
  value: string;
  onChange: (value: string, country: Country) => void;
}

export const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
        Mobile number
      </label>
      <BasePhoneInput
        country={"us"}
        value={value}
        onChange={onChange}
        inputClass="!w-full p-2.5 !text-black !rounded-xl focus:!outline-none focus:!ring-1 focus:!ring-blue-500 !bg-white"
        buttonClass="!border-gray-200 !rounded-l-xl !bg-white"
        containerClass="phone-input"
        enableSearch
        searchClass="!border-gray-200 !rounded-xl !bg-white"
        searchPlaceholder="Search countries..."
      />
      <div className="mt-1 text-xs text-gray-500 flex items-center">
        <svg className="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
        Enter your country code and phone number
      </div>
    </div>
  );
}; 