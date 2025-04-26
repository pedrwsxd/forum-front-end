import styled from "styled-components";

export const Container = styled.main`
  max-width: 900px;
  margin: 60px auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const QuestionBox = styled.div`
  background-color: #1e1e1e;
  padding: 24px;
  border-radius: 8px;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const Content = styled.p`
  font-size: 16px;
  color: #cfcfcf;
`;

export const Author = styled.span`
  display: block;
  margin-top: 12px;
  font-size: 14px;
  color: #888;
`;

export const AnswerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AnswerBox = styled.div`
  background-color: #2b2b2b;
  padding: 16px;
  border-radius: 6px;
  color: #eaeaea;
`;

export const AnswerAuthor = styled.small`
  display: block;
  margin-top: 8px;
  color: #aaa;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #444;
  margin: 24px 0;
`;

export const FormWrapper = styled.div`
  background-color: #1e1e1e;
  padding: 24px;
  border-radius: 8px;
`;

export const SubmitButton = styled.button`
  margin-top: 12px;
  padding: 12px 24px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #574fd8;
  }
`;

