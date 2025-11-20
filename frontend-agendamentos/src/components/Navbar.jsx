import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { usuario, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!usuario) return null;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/consultas" className="navbar-brand">
            Sistema de Agendamentos
          </Link>
          <div className="navbar-menu">
            <span className="navbar-user">Olá, {usuario.nome}</span>
            <span className="navbar-type">({usuario.tipo})</span>
            <button onClick={handleLogout} className="btn btn-secondary">
              Sair
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




