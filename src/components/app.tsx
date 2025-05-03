"use client";

import { FormProvider } from "@/contexts/FormContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import IntakeForm from "@/components/intake-form";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider>
        <IntakeForm />
      </FormProvider>
    </QueryClientProvider>
  );
}
