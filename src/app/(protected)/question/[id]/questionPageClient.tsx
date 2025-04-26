"use client";

import React from "react";
import AnswerForm from "./answerForm";
import * as S from "./style"; // estilos importados
import { Header } from "@/components/header";

interface Question {
  id: number;
  title: string;
  content: string;
  user: { name: string };
  answers: { id: number; content: string; user: { name: string } }[];
}

interface Props {
  question: Question;
}

export default function QuestionPageClient({ question }: Props) {
  return (
      <> 
      <Header />
    <S.Container>
      <S.QuestionBox>
        <S.Title>{question.title}</S.Title>
        <S.Content>{question.content}</S.Content>
        <S.Author>Publicado por <strong>{question.user.name}</strong></S.Author>
      </S.QuestionBox>

      <S.AnswerList>
        <h2 className="text-xl font-semibold mb-3">Respostas</h2>
        {question.answers.length === 0 && <p>Nenhuma resposta ainda.</p>}
        {question.answers.map((a) => (
            <S.AnswerBox key={a.id}>
            <p>{a.content}</p>
            <S.AnswerAuthor>— {a.user.name}</S.AnswerAuthor>
          </S.AnswerBox>
        ))}
      </S.AnswerList>

      <S.Divider />

      <S.FormWrapper>
        <AnswerForm questionId={question.id} />
      </S.FormWrapper>
    </S.Container>
    </>
  );
}
