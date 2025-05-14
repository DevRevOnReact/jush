import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const HUBSPOT_API_URL = process.env.HUBSPOT_API_URL || "https://pback5-479789841998.us-central1.run.app";
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY || "";

export async function POST(request: NextRequest) {
  try {
    // Get the request body
    const body = await request.json();
    
    // Forward the request to the HubSpot API with authentication
    const response = await axios.post(`${HUBSPOT_API_URL}/api/hubspot/submit`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        'X-API-Key': HUBSPOT_API_KEY,
        'Origin': process.env.NEXT_PUBLIC_API_URL || 'https://playful-boba-c760ca.netlify.app'
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
      
      return NextResponse.json(
        { error: error.response.data },
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