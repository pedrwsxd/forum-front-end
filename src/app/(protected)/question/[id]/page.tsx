
import { getQuestion } from '@/services/questions';
import QuestionPageClient from './questionPageClient';

interface Props {
  params: { id: string };
}

export default async function QuestionPage({ params }: Props) {
  const id = Number(params.id); // ✅ ainda dentro da função
  if (isNaN(id)) {
    return <div>ID inválido</div>;
  }

  const { data: question } = await getQuestion(id);

  if (!question) {
    return <div>Pergunta não encontrada</div>;
  }

  return <QuestionPageClient question={question} />;
}
