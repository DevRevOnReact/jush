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
          
          // Handle specific error cases
          if (error.response?.status === 403) {
            throw new Error('Authentication failed. Please check your API key.');
          } else if (error.response?.status === 404) {
            throw new Error('The HubSpot API endpoint could not be found.');
          } else if (error.response?.status === 500) {
            throw new Error('The HubSpot API server encountered an error.');
          }
        }
        
        // Generic error message
        throw new Error('Failed to submit form to HubSpot. Please try again later.');
      }
    },
  });

  return { submitForm };
}