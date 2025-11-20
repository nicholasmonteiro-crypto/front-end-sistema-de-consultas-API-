import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { usuario, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return usuario ? children : <Navigate to="/login" />;
};

export default PrivateRoute;




