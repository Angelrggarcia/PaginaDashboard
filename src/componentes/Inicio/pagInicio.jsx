import fondo from "../../assets/pagInicio.png";
import TopBar from "../../assets/Topbar/topBar.jsx";
import Campanita from "../../assets/Campanita/notificationPopup.jsx";
import Contenido from "../../assets/Inicio/inicio.jsx";

function Inicio() {

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
                <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
                    <Contenido/>
                </main>
                <Campanita/>
            </div>
        </div>
    );
}

export default Inicio;