import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const HUBSPOT_API_URL = process.env.HUBSPOT_API_URL;
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;

export async function POST(request: NextRequest) {
  try {
    if (!HUBSPOT_API_KEY) {
      throw new Error('HubSpot API key is not configured');
    }

    // Get the request body
    const body = await request.json();
    
    // Forward the request to the HubSpot API with authentication
    const response = await axios.post(`${HUBSPOT_API_URL}/crm/v3/objects/contacts`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        'Origin': process.env.NEXT_PUBLIC_API_URL,
        'Referer': process.env.NEXT_PUBLIC_API_URL
      },
    });
    
    // Return the response from the HubSpot API
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error in HubSpot proxy:', error);
    
    // If it's an axios error, return the error response
    if (axios.isAxiosError(error) && error.response) {
      console.error('HubSpot API Error:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers
      });
      
      // Try to extract more detailed error information
      let errorMessage = 'Failed to submit form to HubSpot';
      if (typeof error.response.data === 'string') {
        errorMessage = error.response.data;
      } else if (error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
      
      return NextResponse.json(
        { error: errorMessage },
        { status: error.response.status }
      );
    }
    
    // Return a generic error
    return NextResponse.json(
      { error: 'Failed to submit form to HubSpot' },
      { status: 500 }
    );
  }
} 