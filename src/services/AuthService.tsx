import axios from "axios";
import { AuthCredentials, AuthResponse } from "../models/Auth";

// URL base de la API de autenticación
const API_URL = "https://api.example.com/auth"; // Cambia esta URL por tu backend

const login = async (credentials: AuthCredentials): Promise<AuthResponse> => {
  try {
    // Especifica el tipo de la respuesta utilizando genéricos directamente en axios.post
    const response = await axios.post<AuthResponse>(
      `${API_URL}/login`,
      credentials
    );
    return response.data;
  } catch (error) {
    // Manejo de errores: lanzar un error con un mensaje descriptivo
      throw new Error(`Error en la solicitud de inicio de sesión: ${error}`);
  }
};

// Objeto de servicio de autenticación que expone la función de inicio de sesión
const AuthService = {
  login,
};

export default AuthService;
