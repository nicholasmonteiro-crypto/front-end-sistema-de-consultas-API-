import { createContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem('usuario');
    const token = localStorage.getItem('token');
    
    if (usuarioSalvo && token) {
      setUsuario(JSON.parse(usuarioSalvo));
    }
    setLoading(false);
  }, []);

  const login = async (email, senha) => {
    try {
      const response = await authService.login(email, senha);
      if (response.sucesso) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('usuario', JSON.stringify(response.usuario));
        setUsuario(response.usuario);
        return { sucesso: true };
      }
      return { sucesso: false, mensagem: response.mensagem };
    } catch (error) {
      return { 
        sucesso: false, 
        mensagem: error.response?.data?.mensagem || 'Erro ao fazer login' 
      };
    }
  };

  const registrar = async (dados) => {
    try {
      const response = await authService.registrar(dados);
      if (response.sucesso) {
        return { sucesso: true, mensagem: response.mensagem };
      }
      return { sucesso: false, mensagem: response.mensagem };
    } catch (error) {
      return { 
        sucesso: false, 
        mensagem: error.response?.data?.mensagem || 'Erro ao registrar usuário' 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, registrar, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};




