// Funciones helper simplificadas para el módulo de usuarios

export interface User {
  id: string;
  employee_number: number;
  employee_name: string;
  email: string;
  role: "empleado" | "administrador";
  status: "activo" | "inactivo";
}

export const USER_ROLES = {
  empleado: "Empleado",
  administrador: "Administrador",
} as const;

export const USER_STATUS = {
  activo: "Activo",
  inactivo: "Inactivo",
} as const;

export const getRoleDisplay = (role: string): string => {
  return USER_ROLES[role as keyof typeof USER_ROLES] || "N/A";
};

export const getStatusDisplay = (status: string): string => {
  return USER_STATUS[status as keyof typeof USER_STATUS] || "N/A";
};

export const validateEmployeeNumber = (number: number): boolean => {
  return number > 0 && Number.isInteger(number);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailRegex.test(email);
};

export const validateEmployeeName = (name: string): boolean => {
  return name.trim().length > 0 && name.trim().length <= 100;
};
