import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Consultas from './pages/Consultas';
import Agendamento from './pages/Agendamento';
import { useContext } from 'react';

const AppRoutes = () => {
  const { usuario, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/login" 
          element={usuario ? <Navigate to="/consultas" /> : <Login />} 
        />
        <Route 
          path="/cadastro" 
          element={usuario ? <Navigate to="/consultas" /> : <Cadastro />} 
        />
        <Route
          path="/consultas"
          element={
            <PrivateRoute>
              <Consultas />
            </PrivateRoute>
          }
        />
        <Route
          path="/agendamento"
          element={
            <PrivateRoute>
              <Agendamento />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/consultas" />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;




