import { z } from 'zod';

// Form Step Types
export type PlatformType = 'mobile' | 'website' | 'web' | 'other';
export type BudgetRange = '10k-20k' | '20k-30k' | '30k-40k';
export type NdaOption = 'yes' | 'no';
export type TimelineRange = '1-3' | '3-6' | '6-12' | '12+';
export type ContactMethod = 'email' | 'phone' | 'video' | 'whatsapp';
export type Availability = 'morning' | 'afternoon' | 'evening' | 'flexible';
export type Timezone = 'est' | 'cst' | 'mst' | 'pst' | 'other';
export type TechStack = 'mern' | 'mean' | 'lamp' | 'django' | 'net' | 'other';
export type HostingOption = 'aws' | 'azure' | 'gcp' | 'heroku' | 'digitalocean' | 'other';

// Feature Types
export interface Features {
  userAuth?: boolean;
  payment?: boolean;
  realtime?: boolean;
  analytics?: boolean;
}

export interface TechnicalRequirements {
  apiDocs?: boolean;
  testing?: boolean;
  cicd?: boolean;
  monitoring?: boolean;
}

export interface CommunicationPreferences {
  progressUpdates?: boolean;
  weeklyMeetings?: boolean;
  pmToolAccess?: boolean;
}

// Form Step Interface
export interface FormStep {
  id: number;
  title: string;
  subtitle: string;
  icon: JSX.Element;
}

// Form Context Types
export interface FormContextType {
  currentStep: number;
  formData: UserFormData;
  setCurrentStep: (step: number) => void;
  updateFormData: (data: Partial<UserFormData>) => void;
  resetForm: () => void;
}

// Re-export form schema type
export type { FormValues } from '@/lib/validations/form';

export interface Country {
  dialCode: string;
  name: string;
  countryCode: string;
}

export interface UserFormData {
  // Personal Information
  name?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  countryCode?: string;

  // Company Information
  companyName?: string;
  companySize?: string;
  industry?: string;
  userRole?: string;

  // Project Details
  platform?: PlatformType;
  budget?: BudgetRange;
  needsNda?: NdaOption;
  interestedInSoftware?: string;
  projectType?: string;
  appGoal?: string;
  appFeatures?: string;
  appUsers?: string;
  projectName?: string;

  // Contact Preferences
  contactMethod?: ContactMethod;
  bestTime?: string;
  marketingOpt?: boolean;
} 