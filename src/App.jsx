import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componentes/Login/login.jsx';
import Inicio from './componentes/Inicio/pagInicio.jsx';
import Reportes from './componentes/Reportes/reportes.jsx';
import Registro from './componentes/Registro/registro.jsx';
import ForgotPasswordPage from "./componentes/Password/lostPassword.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Inicio />} />
                <Route path="/reportes" element={<Reportes />} />
                <Route path="/registrarse" element={<Registro />} />
                <Route path="/forgot" element={<ForgotPasswordPage />} />
            </Routes>
        </Router>
    );
}

export default App;