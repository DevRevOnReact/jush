import { Smartphone, Building2, Globe } from "lucide-react";
import { PlatformType } from "@/types/form";

interface PlatformConfig {
  id: PlatformType;
  name: string;
  icon: JSX.Element;
}

export const platforms: PlatformConfig[] = [
  {
    id: "mobile",
    name: "Mobile Application",
    icon: <Smartphone size={32} className="text-[#5C6BC0]" />,
  },
  {
    id: "website",
    name: "Website",
    icon: <Building2 size={32} className="text-[#0099CC]" />,
  },
  {
    id: "web",
    name: "Web Application",
    icon: <Globe size={32} className="text-[#2BB673]" />,
  },
  {
    id: "other",
    name: "Other",
    icon: (
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-lg">
        ...
      </div>
    ),
  },
]; 