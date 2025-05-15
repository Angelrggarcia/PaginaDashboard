import { useState } from "react";
import fondo from "../../assets/pagInicio.png";
import TopBar from "../../assets/Topbar/topBar.jsx";
import Campanita from "../../assets/Campanita/notificationPopup.jsx";
import Avatar from "../../assets/mayonesa.jpeg";
import IconoEditar from "../../assets/edit.svg";
import IconoEditarN from "../../assets/editN.svg";
import IconoGuardar from "../../assets/check.svg";
import IconoCancelar from "../../assets/x.svg";

function Perfil() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    nombre: "Juan Pérez",
    email: "juan.perez@example.com",
    telefono: "+1 234 567 890",
    ubicacion: "Ciudad de México",
    bio: "Desarrollador frontend con experiencia en React y diseño UI/UX. Apasionado por crear interfaces intuitivas y accesibles.",
    habilidades: ["React", "JavaScript", "CSS", "HTML", "UI Design"],
    proyectosCompletados: 24,
    rating: 4.8,
  });

  const [editData, setEditData] = useState({ ...userData });
  const [newSkill, setNewSkill] = useState("");

  const handleEdit = () => {
    setEditData({ ...userData });
    setIsEditing(true);
  };

  const handleSave = () => {
    setUserData({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillAdd = () => {
    if (newSkill.trim() && !editData.habilidades.includes(newSkill.trim())) {
      setEditData((prev) => ({
        ...prev,
        habilidades: [...prev.habilidades, newSkill.trim()],
      }));
      setNewSkill("");
    }
  };
    const [experiencia, setExperiencia] = useState([
    {
      id: 1,
      puesto: "Desarrollador Frontend en TechSolutions",
      periodo: "2020 - Presente",
      descripcion: "Desarrollo de aplicaciones web con React y TypeScript."
    },
    {
      id: 2,
      puesto: "Diseñador UI/UX Freelance",
      periodo: "2018 - 2020",
      descripcion: "Diseño de interfaces y experiencias de usuario para clientes diversos."
    }
  ]);

  const [proyectos, setProyectos] = useState([
    {
      id: 1,
      nombre: "E-commerce Platform",
      descripcion: "Plataforma de ventas con carrito y pasarela de pagos"
    },
    {
      id: 2,
      nombre: "Health Tracker App",
      descripcion: "Aplicación móvil para seguimiento de salud"
    }
  ]);

  const handleSkillRemove = (skillToRemove) => {
    setEditData((prev) => ({
      ...prev,
      habilidades: prev.habilidades.filter((skill) => skill !== skillToRemove),
    }));
  };
    const handleExperienciaChange = (id, field, value) => {
    setExperiencia(prev => prev.map(exp => 
      exp.id === id ? {...exp, [field]: value} : exp
    ));
  };

  const addExperiencia = () => {
    setExperiencia(prev => [...prev, {
      id: Date.now(),
      puesto: "",
      periodo: "",
      descripcion: ""
    }]);
  };

  const removeExperiencia = (id) => {
    setExperiencia(prev => prev.filter(exp => exp.id !== id));
  };

  // Handlers para proyectos
  const handleProyectoChange = (id, field, value) => {
    setProyectos(prev => prev.map(proj => 
      proj.id === id ? {...proj, [field]: value} : proj
    ));
  };

  const addProyecto = () => {
    setProyectos(prev => [...prev, {
      id: Date.now(),
      nombre: "",
      descripcion: ""
    }]);
  };

  const removeProyecto = (id) => {
    setProyectos(prev => prev.filter(proj => proj.id !== id));
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

        {/* Contenido principal */}
        <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-12">
          <div className="bg-opacity-90 rounded-3xl shadow-xl overflow-hidden">
            {/* Sección superior del perfil */}
            <div className="bg-gray-900 p-6 text-white relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="relative mb-4 md:mb-0 md:mr-6">
                  <img
                    src={Avatar}
                    alt="Avatar"
                    className="w-32 h-32 rounded-full border-4 border-white object-cover"
                  />
                  {isEditing && (
                    <button
                      onClick={() => document.getElementById('avatarInput').click()}
                    className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition transform hover:scale-110 cursor-pointer"
                    >
                      <img src={IconoEditarN} alt="Cambiar avatar" className="w-4 h-4" />
                    </button>
                  )}
                  <input
                    id="avatarInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                        //logica
                      console.log("Avatar cambiado:", e.target.files[0]);
                    }}
                  />
                </div>
                <div className="text-center md:text-left">
                  {isEditing ? (
                    <input
                      type="text"
                      name="nombre"
                      value={editData.nombre}
                      onChange={handleChange}
                      className="text-3xl font-bold bg-gray-800 text-white border-b border-gray-600 focus:outline-none focus:border-blue-500 w-full"
                    />
                  ) : (
                    <h1 className="text-3xl font-bold">{userData.nombre}</h1>
                  )}
                  <p className="text-blue-100">
                    {isEditing ? (
                      <textarea
                        name="bio"
                        value={editData.bio}
                        onChange={handleChange}
                        className="bg-gray-800 text-white border-b border-gray-600 focus:outline-none focus:border-blue-500 w-full"
                        rows="2"
                      />
                    ) : (
                      userData.bio.split(".")[0] + "."
                    )}
                  </p>
                  <div className="flex items-center justify-center md:justify-start mt-2">
                    <span className="flex items-center">
                      ⭐ {userData.rating} • {userData.proyectosCompletados} proyectos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido del perfil */}
            <div className="p-6 overflow-y-auto md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Columna izquierda - Información personal */}
              <div className="md:col-span-1 space-y-6">
                <div className="bg-gray-50 p-5 rounded-xl">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    Información Personal
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Correo electrónico</p>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={editData.email}
                          onChange={handleChange}
                          className="font-medium bg-gray-100 border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full cursor-pointer"
                        />
                      ) : (
                        <p className="font-medium">{userData.email}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Teléfono</p>
                      {isEditing ? (
                        <input
                          type="tel"
                          name="telefono"
                          value={editData.telefono}
                          onChange={handleChange}
                          className="font-medium bg-gray-100 border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full cursor-pointer"
                        />
                      ) : (
                        <p className="font-medium">{userData.telefono}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Ubicación</p>
                      {isEditing ? (
                        <input
                          type="text"
                          name="ubicacion"
                          value={editData.ubicacion}
                          onChange={handleChange}
                          className="font-medium bg-gray-100 border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full cursor-pointer"
                        />
                      ) : (
                        <p className="font-medium">{userData.ubicacion}</p>
                      )}
                    </div>
                  </div>
                  {isEditing ? (
                    <div className="flex space-x-2 mt-4">
                      <button
                        onClick={handleSave}
                        className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-200 flex items-center justify-center cursor-pointer"
                     >
                        <img
                          src={IconoGuardar}
                          alt="Guardar"
                          className="w-4 h-4 mr-2"
                        />
                        Guardar
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-200 flex items-center justify-center cursor-pointer"
                      >
                        <img
                          src={IconoCancelar}
                          alt="Cancelar"
                          className="w-4 h-4 mr-2"
                        />
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={handleEdit}
                      className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200 flex items-center justify-center cursor-pointer"
                    >
                      <img
                        src={IconoEditar}
                        alt="Editar"
                        className="w-4 h-4 mr-2"
                      />
                      Editar perfil
                    </button>
                  )}
                </div>

                <div className="bg-gray-50 p-5 rounded-xl">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    Habilidades
                  </h2>
                  {isEditing ? (
                    <div className="mb-4">
                      <div className="flex">
                        <input
                          type="text"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          placeholder="Nueva habilidad"
                          className="flex-1 px-3 py-1 border border-gray-300 rounded-l-full text-sm cursor-pointer"
                        />
                        <button
                          onClick={handleSkillAdd}
                          className="bg-blue-500 text-white px-3 py-1 rounded-r-full text-sm hover:bg-blue-600 cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ) : null}
                  <div className="flex flex-wrap gap-2">
                    {(isEditing ? editData.habilidades : userData.habilidades).map(
                      (habilidad, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isEditing
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer flex items-center"
                              : "bg-blue-100 text-blue-800"
                          }`}
                          onClick={() =>
                            isEditing && handleSkillRemove(habilidad)
                          }
                        >
                          {habilidad}
                          {isEditing && (
                            <span className="ml-1 text-xs">×</span>
                          )}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Columna derecha - Biografía y otras secciones */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-gray-50 p-5 rounded-xl">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    Sobre mí
                  </h2>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={editData.bio}
                      onChange={handleChange}
                      className="cursor-pointer w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                    />
                  ) : (
                    <p className="text-gray-700">{userData.bio}</p>
                  )}
                </div>
                  {/*EXPERIENCIA EDIT*/ }
                <div className="bg-gray-50 p-5 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Experiencia</h2>
                    {isEditing && (
                    <button 
                        onClick={addExperiencia}
                        className="cursor-pointer text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full text-sm flex items-center transition-colors"
                    >
                        <span className="text-lg mr-1">+</span> Añadir experiencia
                    </button>
                    )}
                </div>
                <div className="space-y-4">
                    {experiencia.map((exp) => (
                    <div key={exp.id} className="border-l-4 border-blue-500 pl-4 py-3 relative group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        {isEditing ? (
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                            <input
                                type="text"
                                value={exp.puesto}
                                onChange={(e) => handleExperienciaChange(exp.id, 'puesto', e.target.value)}
                                className="cursor-pointer font-semibold text-gray-800 bg-gray-50 border-b-2 border-blue-200 focus:outline-none focus:border-blue-500 w-full px-2 py-1 rounded-t"
                                placeholder="Puesto / Rol"
                            />
                            <button
                                onClick={() => removeExperiencia(exp.id)}
                                className="cursor-pointer ml-2 bg-red-100 text-red-600 hover:bg-red-200 p-1 rounded-full transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            </div>
                            <input
                            type="text"
                            value={exp.periodo}
                            onChange={(e) => handleExperienciaChange(exp.id, 'periodo', e.target.value)}
                            className="cursor-pointer text-sm text-gray-600 bg-gray-50 border-b-2 border-blue-200 focus:outline-none focus:border-blue-500 w-full px-2 py-1"
                            placeholder="Ej: 2020 - Presente"
                            />
                            <textarea
                            value={exp.descripcion}
                            onChange={(e) => handleExperienciaChange(exp.id, 'descripcion', e.target.value)}
                            className="cursor-pointer text-gray-700 mt-1 bg-gray-50 border-2 border-blue-200 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500 text-sm"
                            placeholder="Descripción de tus responsabilidades y logros"
                            rows="3"
                            />
                        </div>
                        ) : (
                        <>
                            <h3 className="font-semibold text-gray-800">{exp.puesto}</h3>
                            <p className="text-sm text-blue-600">{exp.periodo}</p>
                            <p className="text-gray-700 mt-1 text-sm">{exp.descripcion}</p>
                        </>
                        )}
                    </div>
                    ))}
                </div>
                </div>
                  {/*Proyectos EDIT*/ }
                  <div className=""></div>

                  <div className="bg-gray-50 p-5 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Proyectos recientes</h2>
                        {isEditing && (
                        <button 
                            onClick={addProyecto}
                            className="cursor-pointer text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full text-sm flex items-center transition-colors"
                        >
                            <span className="text-lg mr-1">+</span> Añadir proyecto
                        </button>
                        )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {proyectos.map((proj) => (
                        <div 
                            key={proj.id} 
                            className={`rounded-lg p-4 relative group ${isEditing ? 'bg-white border-2 border-dashed border-blue-200' : 'bg-white border hover:shadow-md'} transition-all duration-200`}
                        >
                            {isEditing ? (
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                <input
                                    type="text"
                                    value={proj.nombre}
                                    onChange={(e) => handleProyectoChange(proj.id, 'nombre', e.target.value)}
                                    className="cursor-pointer font-semibold text-gray-800 bg-gray-50 border-b-2 border-blue-200 focus:outline-none focus:border-blue-500 w-full px-2 py-1 rounded-t"
                                    placeholder="Nombre del proyecto"
                                />
                                <button
                                    onClick={() => removeProyecto(proj.id)}
                                    className="ml-2 bg-red-100 text-red-600 hover:bg-red-200 p-1 rounded-full transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                </div>
                                <textarea
                                value={proj.descripcion}
                                onChange={(e) => handleProyectoChange(proj.id, 'descripcion', e.target.value)}
                                className="cursor-pointer text-gray-700 text-sm bg-gray-50 border-2 border-blue-200 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
                                placeholder="Descripción del proyecto y tecnologías usadas"
                                rows="3"
                                />
                            </div>
                            ) : (
                            <>
                                <h3 className="font-semibold text-gray-800">{proj.nombre}</h3>
                                <p className="text-sm text-gray-600 mt-2">{proj.descripcion}</p>
                                {!isEditing && (
                                <div className="mt-3 flex space-x-2">
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Node.js</span>
                                </div>
                                )}
                            </>
                            )}
                        </div>
                        ))}
                    </div>
                    </div>


              </div>
            </div>
          </div>
        </main>

        <Campanita />
      </div>
    </div>
  );
}

export default Perfil;