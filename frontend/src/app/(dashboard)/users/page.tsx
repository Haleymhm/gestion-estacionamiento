"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import getCookie from "@/lib/getToken";
import { Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  userCode: number;
  userName: string;
  userEmail: string;
  userRol: number;
  userStatus: number;
  createdAt: string;
  updatedAt: string;
}

interface UserForm {
  userCode: number;
  userName: string;
  userEmail: string;
  userRol: number;
  userStatus: number;
}

const initialForm: UserForm = {
  userCode: 0,
  userName: "",
  userEmail: "",
  userRol: 1,
  userStatus: 1,
};

const PAGE_SIZE = 15;

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [form, setForm] = useState<UserForm>(initialForm);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_MS_INCIDENCIAS_URL;

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 500);
    
    return () => clearTimeout(timer);
  }, [search]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(PAGE_SIZE),
        search: debouncedSearch,
      });
      const res = await fetch(`${apiUrl}users?${params.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      });
      if (!res.ok) throw new Error("No se pudieron obtener los usuarios.");
      const response = await res.json();
      console.log("User List");
      console.log(response);
      // El backend devuelve un objeto con data y pagination
      setUsers(response.data || []);
      setTotalPages(response.pagination?.totalPages || 1);
      setTotal(response.pagination?.totalRecords || 0);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      console.error("Error al obtener usuarios:", e);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, debouncedSearch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const openCreate = () => {
    setIsEdit(false);
    setCurrentUser(null);
    setForm(initialForm);
    setIsModalOpen(true);
  };

  const openEdit = (user: User) => {
    setIsEdit(true);
    setCurrentUser(user);
    setForm({
      userCode: user.userCode,
      userName: user.userName,
      userEmail: user.userEmail,
      userRol: user.userRol,
      userStatus: user.userStatus,
    });
    setIsModalOpen(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ 
      ...prev, 
      [name]: name === "userCode" ? parseInt(value) || 0 : value 
    }));
  };

  const handleSelectChange = (name: keyof UserForm, value: string) => {
    setForm((prev) => ({ 
      ...prev, 
      [name]: (name === "userRol" || name === "userStatus") ? parseInt(value) : value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);
    try {
      const method = isEdit ? "PUT" : "POST";
      const body: any = { ...form };
      
      // Para PUT, incluir el ID en la URL, no en el body
      const url = isEdit 
        ? `${apiUrl}users/${currentUser?.id}` 
        : `${apiUrl}users`;

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok)
        throw new Error(data.message || "Error al guardar el usuario.");

      toast.success(`Usuario ${isEdit ? "actualizado" : "creado"} con éxito.`);
      setIsModalOpen(false);
      fetchUsers();
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      console.error("Error al guardar usuario:", e);
      toast.error(errorMessage);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setActionLoading(true);
    try {
      const res = await fetch(`${apiUrl}users/${deleteId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      });
      
      if (!res.ok) {
        // Solo intentar parsear JSON si hay contenido en la respuesta
        const errorText = await res.text();
        let errorMessage = "Error al eliminar el usuario.";
        
        if (errorText) {
          try {
            const errorData = JSON.parse(errorText);
            errorMessage = errorData.message || errorMessage;
          } catch {
            errorMessage = errorText || errorMessage;
          }
        }
        
        throw new Error(errorMessage);
      }

      toast.success("Usuario eliminado con éxito.");
      setDeleteId(null);
      setIsConfirmDeleteOpen(false);
      fetchUsers();
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      console.error("Error al eliminar usuario:", e);
      toast.error(errorMessage);
    } finally {
      setActionLoading(false);
    }
  };

  const renderTableBody = () => {
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={6} className="text-center h-24">
            Cargando...
          </TableCell>
        </TableRow>
      );
    }

    if (users.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={6} className="text-center h-24">
            No se encontraron usuarios.
          </TableCell>
        </TableRow>
      );
    }

    return users.map((user) => (
      <TableRow key={user.id}>
        <TableCell className="font-medium">
          {user.userCode}
        </TableCell>
        <TableCell className="font-medium">
          {user.userName}
        </TableCell>
        <TableCell>{user.userEmail}</TableCell>
        <TableCell>
          <Badge
            variant={
              user.userRol === 1 ? "secondary" : "outline"
            }
          >
            {user.userRol === 1 ? "Administrador" : "Empleado"}
          </Badge>
        </TableCell>
        <TableCell>
          <Badge
            variant={
              user.userStatus === 1
                ? "default"
                : "destructive"
            }
          >
            {user.userStatus === 1 ? "Activo" : "Inactivo"}
          </Badge>
        </TableCell>
        <TableCell className="text-right">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => openEdit(user)}
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setDeleteId(user.id);
              setIsConfirmDeleteOpen(true);
            }}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <div className="p-4 md:p-8 space-y-4">
      <div className="flex items-center">
        <h2 className="text-3xl font-bold text-blue-800">Usuarios</h2>
        <div className="ml-auto flex items-center gap-2">
          <Input
            placeholder="Buscar usuario..."
            value={search}
            onChange={handleSearch}
            className="w-64"
          />
          <Button onClick={openCreate}>
            <Plus className="mr-2 h-4 w-4" /> Nuevo Usuario
          </Button>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-800 text-white hover:bg-blue-950">
              <TableHead className="text-white">Código Usuario</TableHead>
              <TableHead className="text-white">Nombre</TableHead>
              <TableHead className="text-white">Email</TableHead>
              <TableHead className="text-white w-32">Rol</TableHead>
              <TableHead className="text-white w-24">Status</TableHead>
              <TableHead className="w-32 text-white text-right">
                Acciones
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {renderTableBody()}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <div>Total: {total} usuarios</div>
        <div className="flex items-center gap-2">
          <span>
            Página {page} de {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Siguiente
          </Button>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[480px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>
                {isEdit ? "Editar Usuario" : "Nuevo Usuario"}
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="userCode" className="text-right">
                  Código Usuario
                </Label>
                <Input
                  id="userCode"
                  name="userCode"
                  type="number"
                  value={form.userCode}
                  onChange={handleFormChange}
                  required
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="userName" className="text-right">
                  Nombre
                </Label>
                <Input
                  id="userName"
                  name="userName"
                  value={form.userName}
                  onChange={handleFormChange}
                  required
                  maxLength={100}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="userEmail" className="text-right">
                  Email
                </Label>
                <Input
                  id="userEmail"
                  name="userEmail"
                  type="email"
                  value={form.userEmail}
                  onChange={handleFormChange}
                  required
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="userRol" className="text-right">
                  Rol
                </Label>
                <Select
                  onValueChange={(value) => {
                    if (value === "placeholder") return;
                    handleSelectChange("userRol", value);
                  }}
                  value={form.userRol?.toString() || "placeholder"}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue key="userRol-select-value" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem key="userRol-empleado" value="2">
                      Empleado
                    </SelectItem>
                    <SelectItem key="userRol-administrador" value="1">
                      Administrador
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="userStatus" className="text-right">
                  Status
                </Label>
                <Select
                  onValueChange={(value) => {
                    if (value === "placeholder") return;
                    handleSelectChange("userStatus", value);
                  }}
                  value={form.userStatus?.toString() || "placeholder"}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue key="userStatus-select-value" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem key="userStatus-activo" value="1">
                      Activo
                    </SelectItem>
                    <SelectItem key="userStatus-inactivo" value="0">
                      Inactivo
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={actionLoading}>
                {actionLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {isEdit ? "Guardar Cambios" : "Crear Usuario"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={isConfirmDeleteOpen}
        onOpenChange={setIsConfirmDeleteOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              ¿Estás seguro de que quieres eliminar este usuario?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Esto eliminará permanentemente
              al usuario.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteId(null)}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={actionLoading}
              className="bg-destructive hover:bg-destructive/90"
            >
              {actionLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Eliminar"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
