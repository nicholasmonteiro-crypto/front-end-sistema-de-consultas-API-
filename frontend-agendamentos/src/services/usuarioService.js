import api from './api';

export const usuarioService = {
  async listarProfissionais() {
    const response = await api.get('/usuarios/profissionais');
    return response.data;
  },

  async listarPacientes() {
    const response = await api.get('/usuarios/pacientes');
    return response.data;
  },

  async listarTodos() {
    const response = await api.get('/usuarios');
    return response.data;
  },
};

