import api from './api';

export const authService = {
  async registrar(dados) {
    const response = await api.post('/auth/registrar', dados);
    return response.data;
  },

  async login(email, senha) {
    const response = await api.post('/auth/login', { email, senha });
    return response.data;
  },
};




