// src/controllers/AuthController.ts
import { useState } from 'react';
import AuthService from '../services/mockAuthService';
import { AuthCredentials, User } from '../models/Auth';

const useAuthController = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  const login = async (credentials: AuthCredentials) => {
    try {
      const response = await AuthService.login(credentials);
      setCurrentUser(response.user);
      localStorage.setItem('authToken', response.token);  // Guarda el token en localStorage
    } catch (error) {
      setAuthError('Por favor compruebe sus credenciales.');
    }
  };

  return {
    currentUser,
    authError,
    login,
  };
};

export default useAuthController;
