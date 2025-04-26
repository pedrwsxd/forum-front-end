import { api } from "./api";

export const answerQuestion = (questionId: number, content: string) =>
    api.post(`/questions/${questionId}/answers`, { content }, { withCredentials: true });