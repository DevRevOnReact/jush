"use client";

import { FormProvider } from "@/contexts/FormContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import IntakeForm from "@/components/intake-form";
import { useForm } from "react-hook-form";

const queryClient = new QueryClient();

export function App() {
  const methods = useForm();
  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...methods}>
        <IntakeForm />
      </FormProvider>
    </QueryClientProvider>
  );
}
