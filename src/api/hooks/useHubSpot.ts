import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface HubSpotField {
  name: string;
  value: string;
}

interface HubSpotFormData {
  fields: HubSpotField[];
  context: {
    pageUri: string;
    pageName: string;
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://pback3-479789841998.us-central1.run.app/";

export function useHubSpot() {
  const submitForm = useMutation({
    mutationFn: async (data: HubSpotFormData) => {
      const response = await axios.post(`${API_URL}/api/hubspot/submit`, data);
      return response.data;
    },
  });

  return { submitForm };
}