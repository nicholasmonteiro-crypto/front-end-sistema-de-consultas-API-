import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { consultaService } from '../services/consultaService';
import { AuthContext } from '../context/AuthContext';
import './Consultas.css';

const Consultas = () => {
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');
  const { usuario } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    carregarConsultas();
  }, []);

  const carregarConsultas = async () => {
    try {
      setLoading(true);
      const response = await consultaService.listar();
      if (response.sucesso) {
        setConsultas(response.consultas);
      }
    } catch (error) {
      setErro('Erro ao carregar consultas');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelar = async (id) => {
    if (!window.confirm('Tem certeza que deseja cancelar esta consulta?')) {
      return;
    }

    try {
      const response = await consultaService.cancelar(id);
      if (response.sucesso) {
        carregarConsultas();
      }
    } catch (error) {
      alert('Erro ao cancelar consulta');
      console.error(error);
    }
  };

  const formatarData = (data) => {
    if (!data) return '-';
    const date = new Date(data);
    return date.toLocaleDateString('pt-BR');
  };

  const getStatusBadge = (status) => {
    const badges = {
      agendada: 'badge-agendada',
      concluida: 'badge-concluida',
      cancelada: 'badge-cancelada'
    };
    return badges[status] || '';
  };

  if (loading) {
    return <div className="loading">Carregando consultas...</div>;
  }

  return (
    <div className="consultas-container">
      <div className="container">
        <div className="consultas-header">
          <h1>Minhas Consultas</h1>
          <button 
            onClick={() => navigate('/agendamento')} 
            className="btn btn-primary"
          >
            + Nova Consulta
          </button>
        </div>

        {erro && <div className="alert alert-error">{erro}</div>}

        {consultas.length === 0 ? (
          <div className="card">
            <p>Nenhuma consulta encontrada.</p>
          </div>
        ) : (
          <div className="consultas-grid">
            {consultas.map((consulta) => (
              <div key={consulta._id} className="consulta-card">
                <div className="consulta-header">
                  <span className={`badge ${getStatusBadge(consulta.status)}`}>
                    {consulta.status}
                  </span>
                </div>
                
                <div className="consulta-info">
                  <div className="consulta-item">
                    <strong>Data:</strong> {formatarData(consulta.data)} às {consulta.hora}
                  </div>
                  
                  <div className="consulta-item">
                    <strong>Paciente:</strong> {consulta.pacienteId?.nome || 'N/A'}
                  </div>
                  
                  <div className="consulta-item">
                    <strong>Profissional:</strong> {consulta.profissionalId?.nome || 'N/A'}
                  </div>
                  
                  {consulta.descricao && (
                    <div className="consulta-item">
                      <strong>Descrição:</strong> {consulta.descricao}
                    </div>
                  )}
                  
                  {consulta.observacoes && (
                    <div className="consulta-item">
                      <strong>Observações:</strong> {consulta.observacoes}
                    </div>
                  )}
                </div>

                {consulta.status === 'agendada' && (
                  <div className="consulta-actions">
                    <button
                      onClick={() => handleCancelar(consulta._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Cancelar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Consultas;




