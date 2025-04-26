import { api } from './api';

export const getQuestions = () => api.get('/questions');

export const getQuestion = async (id: number) => {
    try {
      const response = await api.get(`/questions/${id}`);
      return response;
    } catch (error) {
      console.error("Erro ao buscar a pergunta:", error);
      throw error;
    }
  };

  export const createQuestion = (data: { title: string; content: string }) =>
    api.post('/questions', data);