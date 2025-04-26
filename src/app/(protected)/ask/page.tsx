'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { createQuestion } from '@/services/questions';
import { Input } from '@/components/input';
import * as S from './style';
import { Header } from '@/components/header';

export default function AskPage() {
  const { control, handleSubmit, reset } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    await createQuestion(data); // { title, content }
    reset();
    router.push('/feed');
  };

  return (
    <>
    < Header />
    <S.Container>
      <S.Title>Publique sua pergunta</S.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="title"
          control={control}
          placeholder="Título da pergunta"
          errorMessage=""
          maxLength={100}
          />
        <Input
          name="content"
          control={control}
          placeholder="Detalhe sua dúvida"
          errorMessage=""
          maxLength={1000}
          />
        <S.SubmitButton type="submit">Publicar pergunta</S.SubmitButton>
      </form>
    </S.Container>
    </>
  );
}
