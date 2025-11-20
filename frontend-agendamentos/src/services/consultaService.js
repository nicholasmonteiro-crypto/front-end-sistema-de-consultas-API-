import api from './api';

export const consultaService = {
  async listar() {
    const response = await api.get('/consultas');
    return response.data;
  },

  async obterPorId(id) {
    const response = await api.get(`/consultas/${id}`);
    return response.data;
  },

  async criar(dados) {
    const response = await api.post('/consultas', dados);
    return response.data;
  },

  async atualizar(id, dados) {
    const response = await api.put(`/consultas/${id}`, dados);
    return response.data;
  },

  async deletar(id) {
    const response = await api.delete(`/consultas/${id}`);
    return response.data;
  },

  async cancelar(id) {
    const response = await api.put(`/consultas/${id}`, { status: 'cancelada' });
    return response.data;
  },
};




