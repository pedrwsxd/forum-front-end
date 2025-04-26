"use client";

import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Header } from '@/components/header'
import { Card } from '@/components/card'
import { UserInfo } from '@/components/userInfo'
import { Container, Column, Title, TitleHighlight } from './style'
import { AuthContext } from '@/context/auth'
import { getQuestions } from '@/services/questions';

dayjs.extend(relativeTime);

const Feed = () => {

    type Question = {
      id: string;
      title: string;
      user: {
        name: string;
      };
      createdAt: string;
    };
    
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
      const fetchQuestions = async () => {
        try {
          const { data } = await getQuestions();
          setQuestions(data);
        } catch (error) {
          console.error('Erro ao buscar perguntas:', error);
        }
      };
  
      fetchQuestions();
    }, []);
  

    return (<>
        <Header />
        <Container>
            <Column flex={3}>
            <Title>Feed</Title>
            {questions.map((q) => (
            <Card
              key={q.id}
              author={q.user.name}
              title={q.title}
              time={dayjs(q.createdAt).fromNow()}
              tags="#Pergunta"
              likes={0} // ainda pode implementar
            />
          ))}
            </Column>
            <Column flex={1}>
            <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo percentual={80} nome="Pedro Henrick" image="https://github.com/pedrwsxd.png" />
                <UserInfo percentual={60} nome="Pedro Henrick" image="https://github.com/pedrwsxd.png" />
                <UserInfo percentual={45} nome="Pedro Henrick" image="https://github.com/pedrwsxd.png" />
                <UserInfo percentual={31} nome="Pedro Henrick" image="https://github.com/pedrwsxd.png" />
                <UserInfo percentual={30} nome="Pedro Henrick" image="https://github.com/pedrwsxd.png" />
            </Column >
        </Container>
    </>
    )
}

export default Feed;