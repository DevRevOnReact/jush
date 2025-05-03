import * as z from 'zod';
import { isValidEmail, isValidPhone } from '@/lib/utils';
import {
  PlatformType,
  BudgetRange,
  NdaOption,
  TimelineRange,
  ContactMethod,
  Availability,
  Timezone,
  TechStack,
  HostingOption,
} from '@/types/form';

export const formSchema = z.object({
  // Step 1 - Personal Info
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address').refine(isValidEmail, 'Invalid email format'),
  phone: z.string().refine(isValidPhone, 'Invalid phone number'),
  name: z.string().optional(),
  countryCode: z.string().optional(),
  companyName: z.string().optional(),
  companySize: z.string().optional(),
  industry: z.string().optional(),
  userRole: z.string().optional(),

  // Step 2 - Platform
  platform: z.enum(['mobile', 'website', 'web', 'other'] as const).optional(),

  // Step 3 - Budget
  budget: z.enum(['10k-20k', '20k-30k', '30k-40k'] as const).optional(),
  needsNda: z.enum(['yes', 'no'] as const).optional(),

  // Step 4 - Additional Requirements
  description: z.string().optional(),
  timeline: z.enum(['1-3', '3-6', '6-12', '12+'] as const).optional(),
  features: z.object({
    userAuth: z.boolean().optional(),
    payment: z.boolean().optional(),
    realtime: z.boolean().optional(),
    analytics: z.boolean().optional(),
  }).optional(),

  // Step 5 - Technical Preferences
  techStack: z.enum(['mern', 'mean', 'lamp', 'django', 'net', 'other'] as const).optional(),
  hosting: z.enum(['aws', 'azure', 'gcp', 'heroku', 'digitalocean', 'other'] as const).optional(),
  technicalRequirements: z.object({
    apiDocs: z.boolean().optional(),
    testing: z.boolean().optional(),
    cicd: z.boolean().optional(),
    monitoring: z.boolean().optional(),
  }).optional(),
  technicalNotes: z.string().optional(),

  // Step 6 - Communication Preferences
  contactMethod: z.enum(['email', 'phone', 'video', 'whatsapp'] as const).optional(),
  availability: z.enum(['morning', 'afternoon', 'evening', 'flexible'] as const).optional(),
  timezone: z.enum(['est', 'cst', 'mst', 'pst', 'other'] as const).optional(),
  communicationPreferences: z.object({
    progressUpdates: z.boolean().optional(),
    weeklyMeetings: z.boolean().optional(),
    pmToolAccess: z.boolean().optional(),
  }).optional(),
  communicationNotes: z.string().optional(),

  // Other fields
  message: z.string().min(10, 'Message must be at least 10 characters').optional(),
  terms: z.boolean().refine((val) => val, 'You must accept the terms and conditions'),
  interestedInSoftware: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>; 