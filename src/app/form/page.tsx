"use client"
import "@/global.css";
import IntakeForm from "@/components/intake-form";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { FormProvider as RHFFormProvider } from "react-hook-form";
import { FormProvider } from "@/contexts/FormContext";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { useForm } from "react-hook-form";

import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

export default function Form() {
    const methods = useForm();

    return (
        <>
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                        <TooltipProvider>
                            <RHFFormProvider {...methods}>
                                <FormProvider>
                                    <IntakeForm />
                                </FormProvider>
                            </RHFFormProvider>
                        </TooltipProvider>
                    </ThemeProvider>
                </QueryClientProvider>
            </ErrorBoundary>
        </>
    )
}