"use client";

import { useFormContext } from "@/contexts/FormContext";
import { AnimatedFormContainer } from "@/components/shared/containers/AnimatedFormContainer";
import { NavigationButton } from "@/components/shared/buttons/NavigationButton";
import { BudgetOption } from "@/components/shared/budget/BudgetOption";
import { NdaSelection } from "@/components/shared/nda/NdaSelection";
import { budgetOptions } from "@/config/budgetOptions";
import { BudgetRange, NdaOption } from "@/types/form";

export default function Step3() {
  const { formData, updateFormData, setCurrentStep } = useFormContext();

  const handleBudgetSelect = (budget: BudgetRange) => {
    updateFormData({ budget });
  };

  const handleNdaSelect = (needsNda: NdaOption) => {
    updateFormData({ needsNda });
  };

  const handleBack = () => {
    setCurrentStep(2);
  };

  const handleNextStep = () => {
    if (formData.budget) {
      setCurrentStep(4);
    }
  };

  return (
    <AnimatedFormContainer 
      title="Budget"
      subtitle="What is your budget?"
    >
      <div className="space-y-4">
        {budgetOptions.map((option) => (
          <BudgetOption
            key={option.id}
            {...option}
            isSelected={formData.budget === option.id}
            onSelect={handleBudgetSelect}
          />
        ))}
      </div>

      {formData.budget && (
        <NdaSelection
          selectedOption={formData.needsNda}
          onSelect={handleNdaSelect}
        />
      )}

      <div className="flex items-center gap-4 mt-12">
        <NavigationButton variant="back" onClick={handleBack} />
        <NavigationButton
          variant="primary"
          onClick={handleNextStep}
          disabled={!formData.budget}
        >
          Next
        </NavigationButton>
      </div>
    </AnimatedFormContainer>
  );
}
