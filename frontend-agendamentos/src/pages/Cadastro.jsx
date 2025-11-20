import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/authService';
import './Cadastro.css';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    tipo: 'paciente'
  });
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    setSucesso('');
    setLoading(true);

    try {
      const resultado = await authService.registrar(formData);
      
      if (resultado.sucesso) {
        setSucesso('Cadastro realizado com sucesso! Redirecionando...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setErro(resultado.mensagem);
      }
    } catch (error) {
      setErro(error.response?.data?.mensagem || 'Erro ao realizar cadastro');
    }
    
    setLoading(false);
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          {erro && <div className="alert alert-error">{erro}</div>}
          {sucesso && <div className="alert alert-success">{sucesso}</div>}
          
          <div className="form-group">
            <label>Nome Completo</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
              placeholder="Mínimo 6 caracteres"
              minLength={6}
            />
          </div>

          <div className="form-group">
            <label>Tipo de Usuário</label>
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
            >
              <option value="paciente">Paciente</option>
              <option value="profissional">Profissional</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>

        <p className="cadastro-link">
          Já tem uma conta? <Link to="/login">Faça login</Link>
        </p>
      </div>
    </div>
  );
};

export default Cadastro;




