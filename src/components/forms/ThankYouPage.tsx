import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/common/Button';

interface ThankYouPageProps {
  onReset: () => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
        <CheckCircle className="h-6 w-6 text-green-600" />
      </div>
      <div className="mt-3 text-center">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Thank you for your submission!
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            We have received your information and will get back to you shortly.
          </p>
        </div>
        <div className="mt-6">
          <Button onClick={onReset} variant="outline">
            Submit another response
          </Button>
        </div>
      </div>
    </div>
  );
}; 