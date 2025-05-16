import { useState, useEffect } from "react";
import fondo from "../../assets/pagInicio.png";
import TopBar from "../../assets/Topbar/topBar.jsx";
import Campanita from "../../assets/Campanita/notificationPopup.jsx";

// iconos svg 
const EditIcon = ({ className = "h-4 w-4", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
);

const TrashIcon = ({ className = "h-4 w-4", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const CheckIcon = ({ className = "h-5 w-5", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

function AdminUsuarios() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [notification, setNotification] = useState(null);
  
  // ejemples
  const [users, setUsers] = useState([
    {
      id: 1,
      nombre: "Ana López",
      email: "ana.lopez@xcien.com",
      rol: "admin",
      estado: "activo",
      ultimoAcceso: "2023-05-15",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      nombre: "Carlos Méndez",
      email: "carlos.mendez@xcien.com",
      rol: "user",
      estado: "activo",
      ultimoAcceso: "2023-05-14",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      nombre: "Diana Ruiz",
      email: "diana.ruiz@xcien.com",
      rol: "user",
      estado: "inactivo",
      ultimoAcceso: "2023-05-10",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ]);

  // Estado para lo de nuevo/edición usuario
  const [userForm, setUserForm] = useState({
    nombre: "",
    email: "",
    rol: "user",
    estado: "activo"
  });

  // Mostrar notificación temporal
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // filtrado de usuarios
  const filteredUsers = users.filter(user =>
    user.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateUser = () => {
    // creación de usuario
    const newUser = {
      id: Math.max(...users.map(u => u.id)) + 1,
      ...userForm,
      ultimoAcceso: new Date().toISOString().split('T')[0],
      avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg` // img randoms
    };
    
    setUsers([...users, newUser]);
    setNotification({
      type: 'success',
      message: 'Usuario creado exitosamente!'
    });
    setIsCreatingUser(false);
    setUserForm({ nombre: "", email: "", rol: "user", estado: "activo" });
  };

  const handleUpdateUser = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, ...userForm } : user
    ));
    setNotification({
      type: 'success',
      message: 'Usuario actualizado exitosamente!'
    });
    setEditingUserId(null);
    setUserForm({ nombre: "", email: "", rol: "user", estado: "activo" });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    setNotification({
      type: 'success',
      message: 'Usuario eliminado exitosamente!'
    });
  };

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setUserForm({
      nombre: user.nombre,
      email: user.email,
      rol: user.rol,
      estado: user.estado
    });
  };

  return (
    <div className="min-h-screen relative">
      <img
        src={fondo}
        alt="background"
        className="absolute w-full h-full object-cover z-0"
      />
      <div className="relative z-10">
        <TopBar />
        
        {/* Notificación */}
        {notification && (
        <div
            className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 border-l-4 text-white transition-all duration-300 ease-in-out
            ${notification.type === 'success' 
                ? 'bg-green-600 border-green-400' 
                : 'bg-red-600 border-red-400'
            }`}
        >
            {/* Ícono */}
            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
            {notification.type === 'success' ? (
                <svg
                className="w-4 h-4 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            ) : (
                <svg
                className="w-4 h-4 text-red-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            )}
            </div>

            {/* Mensaje */}
            <span className="text-sm font-medium tracking-wide">{notification.message}</span>
        </div>
        )}
        
        {/* Contenido principal */}
        <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-12">
          <div className="bg-opacity-90 rounded-3xl shadow-xl overflow-hidden bg-gray-800 text-white">
            
            <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700">
            <h1 className="text-2xl font-bold text-white">
                Administración de Usuarios
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
                {/* Barra de búsqueda */}
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Buscar usuarios..."
                    className="cursor-pointer pl-8 pr-4 py-2 w-full bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                {/* Botón para nuevo usuario */}
                <button
                  onClick={() => {
                    setIsCreatingUser(true);
                    setEditingUserId(null);
                  }}
                  className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  Nuevo Usuario
                </button>
              </div>
            </div>

            {/* Formulario de creación/edición */}
            {(isCreatingUser || editingUserId) && (
              <div className="p-6 border-b border-gray-700 bg-gray-750">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  {editingUserId ? (
                    <>
                      Editar Usuario
                    </>
                  ) : (
                    <>
                      Crear Nuevo Usuario
                    </>
                  )}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-300">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-600"
                      value={userForm.nombre}
                      onChange={(e) => setUserForm({...userForm, nombre: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-600"
                      value={userForm.email}
                      onChange={(e) => setUserForm({...userForm, email: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-300">Rol</label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-600 appearance-none"
                        value={userForm.rol}
                        onChange={(e) => setUserForm({...userForm, rol: e.target.value})}
                      >
                        <option value="admin">Administrador</option>
                        <option value="user">Usuario Normal</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-300">Estado</label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-600 appearance-none"
                        value={userForm.estado}
                        onChange={(e) => setUserForm({...userForm, estado: e.target.value})}
                      >
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => {
                      setIsCreatingUser(false);
                      setEditingUserId(null);
                    }}
                    className="cursor-pointer px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancelar
                  </button>
                  
                  <button
                    onClick={() => editingUserId ? handleUpdateUser(editingUserId) : handleCreateUser()}
                    className="cursor-pointer px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2"

                  >
                    <CheckIcon className="h-4 w-4" />
                    {editingUserId ? "Actualizar Usuario" : "Crear Usuario"}
                  </button>
                </div>
              </div>
            )}

            {/* Tabla de usuarios */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-750">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Usuario</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rol</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Último Acceso</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-750 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 relative">
                            <img className="h-10 w-10 rounded-full" src={user.avatar} alt={user.nombre} />
                            <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-gray-800 ${
                              user.estado === "activo" ? "bg-green-500" : "bg-red-500"
                            }`}></span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium">{user.nombre}</div>
                            <div className="text-xs text-gray-400">ID: {user.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.rol === "admin" 
                            ? "bg-purple-500/20 text-purple-400" 
                            : "bg-blue-500/20 text-blue-400"
                        }`}>
                          {user.rol === "admin" ? "Administrador" : "Usuario"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.estado === "activo" 
                            ? "bg-green-500/20 text-green-400" 
                            : "bg-red-500/20 text-red-400"
                        }`}>
                          {user.estado === "activo" ? "Activo" : "Inactivo"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        {new Date(user.ultimoAcceso).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleEditClick(user)}
                            className="cursor-pointer text-blue-400 hover:text-blue-300 p-1 rounded-full hover:bg-blue-500/10 transition-colors"
                            title="Editar usuario"
                          >
                            <EditIcon />
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="cursor-pointer text-red-400 hover:text-red-300 p-1 rounded-full hover:bg-red-500/10 transition-colors"
                            title="Eliminar usuario"
                          >
                            <TrashIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mensaje cuando no hay resultados */}
            {filteredUsers.length === 0 && (
              <div className="p-6 text-center text-gray-400">
                No se encontraron usuarios que coincidan con la búsqueda
              </div>
            )}
          </div>
        </main>

        <Campanita />
      </div>
    </div>
  );
}

export default AdminUsuarios;