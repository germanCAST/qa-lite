// src/views/LoginPage.tsx
import React from 'react';
import LoginForm from './components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
