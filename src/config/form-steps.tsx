import { User, Building2, UserCog } from "lucide-react";
import { FormStep } from "@/types/form";

export const FORM_STEPS: FormStep[] = [
  {
    id: 1,
    title: "Your personal details",
    subtitle: "Tell us about yourself",
    icon: <User className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Software Type",
    subtitle: "What you need to build",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Budget",
    subtitle: "Project investment",
    icon: <UserCog className="w-5 h-5" />,
  },
];

export const STEP_INFO = {
  0: { title: "Welcome", stepLabel: "" },
  1: { title: "User Information", stepLabel: "" },
  2: { title: "Software Type", stepLabel: "" },
  3: { title: "Budget", stepLabel: "" },
  4: { title: "Thank You", stepLabel: "Set Your Preferences" },
} as const;

export const SPECIAL_STEPS = {
  WELCOME: 0,
  THANK_YOU: 4,
  NO_INTEREST: 99,
} as const; 