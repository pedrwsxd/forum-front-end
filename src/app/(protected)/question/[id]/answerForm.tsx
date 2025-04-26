"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/input";
import { answerQuestion } from "@/services/answer";
import * as S from "./style"; // importa os estilos criados

export default function AnswerForm({ questionId }: { questionId: number }) {
  const { control, handleSubmit, reset } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    if (!data.content) return;
    await answerQuestion(questionId, data.content);
    reset();
    router.refresh(); // recarrega as respostas
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="content"
        control={control}
        placeholder="Digite sua resposta"
        errorMessage=""
        maxLength={1000}
      />
      <S.SubmitButton type="submit">
        Responder
      </S.SubmitButton>
    </form>
  );
}
