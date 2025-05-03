import { UserFormData } from "@/types/form";

interface HubSpotField {
  name: string;
  value: string;
}

export const prepareHubSpotFields = (formData: UserFormData): HubSpotField[] => {
  return [
    // Personal Information
    { name: "firstname", value: formData.name || "" },
    { name: "lastname", value: formData.lastName || "" },
    { name: "email", value: formData.email || "" },
    { name: "phone", value: formData.phone || "" },
    { name: "country_code", value: formData.countryCode || "" },

    // Company Information
    { name: "company", value: formData.companyName || "" },
    { name: "company_size", value: formData.companySize || "" },
    { name: "industry", value: formData.industry || "" },
    { name: "jobtitle", value: formData.userRole || "" },

    // Project Details
    { name: "interested_in_software", value: formData.interestedInSoftware || "" },
    { name: "project_type", value: formData.projectType || "" },
    { name: "budget_range", value: formData.budget || "" },
    { name: "needs_nda", value: formData.needsNda || "" },
    { name: "platform", value: formData.platform || "" },
    { name: "app_goal", value: formData.appGoal || "" },
    { name: "app_features", value: formData.appFeatures || "" },
    { name: "app_users", value: formData.appUsers || "" },
    { name: "project_name", value: formData.projectName || "" },

    // Contact Preferences
    { name: "preferred_contact_method", value: formData.contactMethod || "" },
    { name: "preferred_time", value: formData.bestTime || "" },
    { name: "marketing_opt_in", value: formData.marketingOpt ? "true" : "false" },
  ];
}; 