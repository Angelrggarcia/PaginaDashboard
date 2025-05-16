import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componentes/Login/login.jsx';
import Inicio from './componentes/Inicio/pagInicio.jsx';
import Reportes from './componentes/Reportes/reportes.jsx';
import Registro from './componentes/Registro/registro.jsx';
import ForgotPasswordPage from "./componentes/Password/lostPassword.jsx";
import PerfilPage from "./componentes/Perfil/perfil.jsx";
import LoadingSpinner from "./assets/LoadingSpinner/loadingSpinner.jsx";
import AdminUsuarios from "./componentes/AdminUsuarios/AdminUsuarios.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Inicio />} />
                <Route path="/reportes" element={<Reportes />} />
                <Route path="/registrarse" element={<Registro />} />
                <Route path="/forgot" element={<ForgotPasswordPage />} />
                <Route path="/perfil" element={<PerfilPage />} />
                <Route path="/load" element={<LoadingSpinner />} />
                <Route path="/adminusuarios" element={<AdminUsuarios />} />

            </Routes>
        </Router>
    );
}

export default App;