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

export function useHubSpot() {
  const submitForm = useMutation({
    mutationFn: async (data: HubSpotFormData) => {
      try {
        // Use our local API route instead of the external API
        const response = await axios.post('/api/hubspot/submit', data);
        return response.data;
      } catch (error) {
        console.error('Error submitting to HubSpot:', error);
        // If it's an axios error, provide more details
        if (axios.isAxiosError(error)) {
          console.error('Response data:', error.response?.data);
          console.error('Response status:', error.response?.status);
          console.error('Response headers:', error.response?.headers);
        }
        throw error;
      }
    },
  });

  return { submitForm };
}