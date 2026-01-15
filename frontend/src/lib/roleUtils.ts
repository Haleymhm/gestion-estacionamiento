import { config } from "zod/v4/core";

// Reglas centralizadas de acceso por rol
type DashboardActions = "incidencias" | "datos" | "reportes";



type RoleRules = {
  menu: Record<string, string[]>;
  dashboard: Record<DashboardActions, string[]>;
  
  
};

export const roleRules: RoleRules = {
  menu: {
    config: ["SUPER_ADMIN"],
    parking: ["SUPER_ADMIN"],
    users: ["SUPER_ADMIN"],
  },
  dashboard: {
    incidencias: ["SUPER_ADMIN"],
    datos: ["SUPER_ADMIN"],
    reportes: ["SUPER_ADMIN"],
  },
  
  
};

// Función reutilizable para validar acceso
type ActionType =  DashboardActions | string;

export function canAccess(
  userRol: string | undefined,
  ruleKey: keyof RoleRules,
  action?: ActionType
) {
  
  if (!userRol) return false;
  const rule = roleRules[ruleKey];
  const userRolName = getRoleLabel(userRol);
  if (typeof rule === "object" && action) {
    // Para objetos con acciones (dashboard, employees, formEmployees, menu)
    return (
      Array.isArray((rule as Record<string, string[]>)[action]) &&
      (rule as Record<string, string[]>)[action].includes(userRolName)
    );
  }
  if (Array.isArray(rule)) {
    return rule.includes(userRolName);
  }

  return false;
}

export const ROLE_LABELS: Record<string, string> = {
  2: "Super Administrador",
  1: "Empleado"  
};

export function getRoleLabel(roleName: string | undefined): string {
  const roleNameString = String(roleName);
  switch (roleNameString) {
    case "1":
      return "SUPER_ADMIN"; // Super Administrador
    case "2":
      return "EMPLEADO"; // Administrador de personal.
    default:
      return "Desconocido";
  }
}
