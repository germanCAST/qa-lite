// src/models/Auth.ts
export interface AuthCredentials {
    email: string;
    password: string;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
    role: string
    token?: string;
  }
  export interface AuthResponse {
    user: User;
    token: string;
  }
  