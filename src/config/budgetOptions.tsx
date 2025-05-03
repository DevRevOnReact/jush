import { Rocket, Palette, Layers } from "lucide-react";
import { BudgetRange } from "@/types/form";

interface BudgetOptionConfig {
  id: BudgetRange;
  label: string;
  icon: (selected: boolean) => JSX.Element;
  borderColor: string;
  iconBg: string;
}

export const budgetOptions: BudgetOptionConfig[] = [
  {
    id: "10k-20k",
    label: "$10,000 - $20,000 – Launch Ready MVP",
    icon: (selected: boolean) => (
      <Rocket
        size={24}
        className={selected ? "text-white" : "text-[#5C6BC0]"}
      />
    ),
    borderColor: "border-[#5C6BC0]",
    iconBg: "bg-[#5C6BC0]",
  },
  {
    id: "20k-30k",
    label: "$20,000 - $30,000 – Custom features & design",
    icon: (selected: boolean) => (
      <Palette
        size={24}
        className={selected ? "text-white" : "text-[#0099CC]"}
      />
    ),
    borderColor: "border-[#0099CC]",
    iconBg: "bg-[#0099CC]",
  },
  {
    id: "30k-40k",
    label: "$30,000 - $40,000 – Scalable with integrations",
    icon: (selected: boolean) => (
      <Layers
        size={24}
        className={selected ? "text-white" : "text-[#2BB673]"}
      />
    ),
    borderColor: "border-[#2BB673]",
    iconBg: "bg-[#2BB673]",
  },
]; 