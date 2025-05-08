import fondo from "../../assets/pagInicio.png";
import TopBar from "../../assets/Topbar/topBar.jsx";
import Campanita from "../../assets/Campanita/notificationPopup.jsx";
import Avatar from "../../assets/mayonesa.jpeg";
import IconoEditar from "../../assets/react.svg";

function Perfil() {

    const userData = {
        nombre: "Juan Pérez",
        email: "juan.perez@example.com",
        telefono: "+1 234 567 890",
        ubicacion: "Ciudad de México",
        bio: "Desarrollador frontend con experiencia en React y diseño UI/UX. Apasionado por crear interfaces intuitivas y accesibles.",
        habilidades: ["React", "JavaScript", "CSS", "HTML", "UI Design"],
        proyectosCompletados: 24,
        rating: 4.8,
    };

    return (
        <div className="min-h-screen relative">
            <img
                src={fondo}
                alt="background"
                className="absolute w-full h-full object-cover z-0"
            />
            <div className="relative z-10">
                <TopBar/>

                {/* Contenido principal */}
                <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-12">
                    <div className=" bg-opacity-90 rounded-3xl shadow-xl overflow-hidden">
                        {/* Sección superior del perfil */}
                        <div className="bg-gray-900 p-6 text-white relative">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="relative mb-4 md:mb-0 md:mr-6">
                                    <img
                                        src={Avatar}
                                        alt="Avatar"
                                        className="w-32 h-32 rounded-full border-4 border-white object-cover"
                                    />
                                    <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md">
                                        <img src={IconoEditar} alt="Editar" className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="text-center md:text-left">
                                    <h1 className="text-3xl font-bold">{userData.nombre}</h1>
                                    <p className="text-blue-100">{userData.bio.split('.')[0]}.</p>
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
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Información Personal</h2>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-sm text-gray-500">Correo electrónico</p>
                                            <p className="font-medium">{userData.email}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Teléfono</p>
                                            <p className="font-medium">{userData.telefono}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Ubicación</p>
                                            <p className="font-medium">{userData.ubicacion}</p>
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200 flex items-center justify-center">
                                        <img src={IconoEditar} alt="Editar" className="w-4 h-4 mr-2" />
                                        Editar perfil
                                    </button>
                                </div>

                                <div className="bg-gray-50 p-5 rounded-xl">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Habilidades</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {userData.habilidades.map((habilidad, index) => (
                                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                {habilidad}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Columna derecha - Biografía y otras secciones */}
                            <div className="md:col-span-2 space-y-6">
                                <div className="bg-gray-50 p-5 rounded-xl">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Sobre mí</h2>
                                    <p className="text-gray-700">{userData.bio}</p>
                                </div>

                                <div className="bg-gray-50 p-5 rounded-xl">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Experiencia</h2>
                                    <div className="space-y-4">
                                        <div className="border-l-4 border-blue-500 pl-4 py-1">
                                            <h3 className="font-semibold">Desarrollador Frontend en TechSolutions</h3>
                                            <p className="text-sm text-gray-500">2020 - Presente</p>
                                            <p className="text-gray-700 mt-1">Desarrollo de aplicaciones web con React y TypeScript.</p>
                                        </div>
                                        <div className="border-l-4 border-blue-500 pl-4 py-1">
                                            <h3 className="font-semibold">Diseñador UI/UX Freelance</h3>
                                            <p className="text-sm text-gray-500">2018 - 2020</p>
                                            <p className="text-gray-700 mt-1">Diseño de interfaces y experiencias de usuario para clientes diversos.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-5 rounded-xl">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Proyectos recientes</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="border rounded-lg p-4 hover:shadow-md transition duration-200">
                                            <h3 className="font-semibold">E-commerce Platform</h3>
                                            <p className="text-sm text-gray-600">Plataforma de ventas con carrito y pasarela de pagos</p>
                                        </div>
                                        <div className="border rounded-lg p-4 hover:shadow-md transition duration-200">
                                            <h3 className="font-semibold">Health Tracker App</h3>
                                            <p className="text-sm text-gray-600">Aplicación móvil para seguimiento de salud</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <Campanita/>
            </div>
        </div>
    );
}

export default Perfil;