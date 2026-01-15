import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import React from "react";

export type UserTableUser = {
  id: string;
  employee_number: number;
  employee_name: string;
  email: string;
  role: "empleado" | "administrador";
  status: "activo" | "inactivo";
};

interface UserTableProps {
  users: UserTableUser[];
  loading: boolean;
  onEdit: (userId: string) => void;
  onDelete: (userId: string) => void;
}

const ROLE_LABELS: Record<string, string> = {
  empleado: "Empleado",
  administrador: "Administrador",
};

const STATUS_LABELS: Record<string, string> = {
  activo: "Activo",
  inactivo: "Inactivo",
};

export const UserTable: React.FC<UserTableProps> = ({
  users,
  loading,
  onEdit,
  onDelete,
}) => (
  <div className="border rounded-lg">
    <Table>
      <TableHeader>
        <TableRow className="bg-blue-800 text-white hover:bg-blue-950">
          <TableHead className="text-white">No. Empleado</TableHead>
          <TableHead className="text-white">Nombre</TableHead>
          <TableHead className="text-white">Email</TableHead>
          <TableHead className="text-white w-32">Rol</TableHead>
          <TableHead className="text-white w-24">Status</TableHead>
          <TableHead className="w-32 text-white text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell colSpan={6} className="text-center h-24">
              Cargando...
            </TableCell>
          </TableRow>
        ) : users.length === 0 ? (
          <TableRow>
            <TableCell colSpan={6} className="text-center h-24">
              No se encontraron usuarios.
            </TableCell>
          </TableRow>
        ) : (
          users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                {user.employee_number}
              </TableCell>
              <TableCell className="font-medium">
                {user.employee_name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    user.role === "administrador" ? "secondary" : "outline"
                  }
                >
                  {ROLE_LABELS[user.role] || `Rol ${user.role}`}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    user.status === "activo" ? "default" : "secondary"
                  }
                >
                  {STATUS_LABELS[user.status] || `Estado ${user.status}`}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(user.id)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(user.id)}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </div>
);
