import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/global.css';
import Login from './pages/Login';
import RecuperarSenha from './pages/RecuperarSenha';
import EmailEnviado from './pages/EmailEnviado';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redireciona / para /login */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/email-enviado" element={<EmailEnviado />} />
      </Routes>
    </Router>
  );
}

export default App;
