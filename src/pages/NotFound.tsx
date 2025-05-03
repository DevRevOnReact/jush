import React from 'react';
import { Link } from 'wouter';
import { ROUTES } from '@/config/routes';

const NotFound: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <p className="mt-2 text-lg text-gray-600">Page not found</p>
        <Link href={ROUTES.HOME}>
          <a className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Go back home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 