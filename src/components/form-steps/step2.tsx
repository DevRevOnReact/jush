"use client";

import { useFormContext } from "@/contexts/FormContext";
import { NavigationButton } from "@/components/shared/buttons/NavigationButton";
import { AnimatedFormContainer } from "@/components/shared/containers/AnimatedFormContainer";
import { PlatformCard } from "@/components/shared/platform/PlatformCard";
import { platforms } from "@/config/platforms";
import { PlatformType } from "@/types/form";

export default function Step2() {
  const { formData, updateFormData, setCurrentStep } = useFormContext();

  const handlePlatformSelection = (platform: PlatformType) => {
    updateFormData({ platform });
  };

  const handleNextStep = () => {
    if (formData.platform) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <AnimatedFormContainer title="Software Type">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {platforms.map((platform) => (
          <PlatformCard
            key={platform.id}
            id={platform.id}
            name={platform.name}
            icon={platform.icon}
            isSelected={formData.platform === platform.id}
            onSelect={handlePlatformSelection}
          />
        ))}
      </div>

      <div className="flex items-center gap-4 mt-12">
        <NavigationButton variant="back" onClick={handleBack} />
        <NavigationButton
          variant="primary"
          onClick={handleNextStep}
          disabled={!formData.platform}
        >
          Next
        </NavigationButton>
      </div>
    </AnimatedFormContainer>
  );
}
