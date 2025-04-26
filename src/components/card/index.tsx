"use client";

import React from 'react';
import { BiSolidLike } from "react-icons/bi";
import {
  ImageBackground,
  CardContainer,
  Content,
  HasInfo,
  PostInfo,
  UserInfo,
  UserPicture
} from './style';
import { CardProps } from './type';

const Card = ({ author, title, time, tags, likes }: CardProps) => {
  return (
    <CardContainer>
      <ImageBackground
        src="https://hermes.dio.me/articles/cover/6458d9ec-0d25-4547-b7b1-25e101cafd65.jpg"
        alt="capa"
      />
      <Content>
        <UserInfo>
          <UserPicture src="https://github.com/pedrwsxd.png" alt="Foto do usuário" />
          <div>
            <h4>{author}</h4>
            <p>{time}</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>{title}</h4>
          <p>
            Clique para visualizar a dúvida completa. <strong>Saiba mais!</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>{tags}</h4>
          <p>
            <BiSolidLike /> {likes}
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
