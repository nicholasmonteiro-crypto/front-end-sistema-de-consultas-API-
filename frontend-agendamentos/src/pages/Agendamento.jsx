import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { consultaService } from '../services/consultaService';
import { authService } from '../services/authService';
import { AuthContext } from '../context/AuthContext';
import './Agendamento.css';

const Agendamento = () => {
  const [formData, setFormData] = useState({
    pacienteId: '',
    profissionalId: '',
    data: '',
    hora: '',
    descricao: ''
  });
  const [profissionais, setProfissionais] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const { usuario } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const carregarUsuarios = async () => {
    try {
      // Como não temos endpoint para listar usuários, vamos usar uma abordagem alternativa
      // Por enquanto, vamos permitir que o usuário digite o ID ou usar o próprio usuário
      setLoadingUsers(false);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
      setLoadingUsers(false);
    }
  };

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

    // Se o usuário for paciente, usar seu próprio ID
    if (usuario.tipo === 'paciente') {
      formData.pacienteId = usuario.id;
    }
    // Se o usuário for profissional, usar seu próprio ID
    if (usuario.tipo === 'profissional') {
      formData.profissionalId = usuario.id;
    }

    try {
      const response = await consultaService.criar(formData);
      
      if (response.sucesso) {
        setSucesso('Consulta agendada com sucesso!');
        setTimeout(() => {
          navigate('/consultas');
        }, 2000);
      } else {
        setErro(response.mensagem);
      }
    } catch (error) {
      setErro(error.response?.data?.mensagem || 'Erro ao agendar consulta');
    }
    
    setLoading(false);
  };

  if (loadingUsers) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="agendamento-container">
      <div className="container">
        <h1>Agendar Nova Consulta</h1>
        
        <div className="card">
          <form onSubmit={handleSubmit}>
            {erro && <div className="alert alert-error">{erro}</div>}
            {sucesso && <div className="alert alert-success">{sucesso}</div>}

            {usuario.tipo === 'profissional' && (
              <div className="form-group">
                <label>ID do Paciente *</label>
                <input
                  type="text"
                  name="pacienteId"
                  value={formData.pacienteId}
                  onChange={handleChange}
                  required
                  placeholder="Digite o ID do paciente"
                />
                <small>Nota: Você precisará do ID do paciente para agendar</small>
              </div>
            )}

            {usuario.tipo === 'paciente' && (
              <div className="form-group">
                <label>ID do Profissional *</label>
                <input
                  type="text"
                  name="profissionalId"
                  value={formData.profissionalId}
                  onChange={handleChange}
                  required
                  placeholder="Digite o ID do profissional"
                />
                <small>Nota: Você precisará do ID do profissional para agendar</small>
              </div>
            )}

            <div className="form-group">
              <label>Data *</label>
              <input
                type="date"
                name="data"
                value={formData.data}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="form-group">
              <label>Hora *</label>
              <input
                type="time"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Descrição</label>
              <textarea
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                rows="4"
                placeholder="Descreva o motivo da consulta..."
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Agendando...' : 'Agendar Consulta'}
              </button>
              <button 
                type="button" 
                onClick={() => navigate('/consultas')} 
                className="btn btn-secondary"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Agendamento;




