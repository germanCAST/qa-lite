// src/services/MockAuthService.ts
import { AuthCredentials, User } from '../models/Auth';

// Dummy data (datos ficticios) para simular la respuesta de la API
const mockUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'johndoe@example.com',
  role: 'admin',
  token: 'mocked-jwt-token',
};

const login = async (credentials: AuthCredentials): Promise<{ user: User; token: string }> => {
  // Simula una verificación simple de credenciales
  if (credentials.email === 'johndoe@example.com' && credentials.password === 'password123') {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ user: mockUser, token: mockUser.token! }), 1000); // Simula una demora de 1 segundo
    });
  } else {
    // Simula un error de autenticación
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Credenciales incorrectas')), 1000);
    });
  }
};

const AuthService = {
  login,
};

export default AuthService;
