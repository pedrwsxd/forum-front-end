import styled from 'styled-components';

export const Container = styled.main`
  max-width: 700px;
  margin: 80px auto;
  padding: 24px;
  background-color: #1e1e1e;
  border-radius: 10px;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  display: block;

  &:hover {
    background-color: #574fd8;
  }
`;
