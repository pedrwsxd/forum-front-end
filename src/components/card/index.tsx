"use client";

import React from 'react'
import { BiSolidLike } from "react-icons/bi";

import { 
    ImageBackground,
    CardContainer, 
    Content, 
    HasInfo, 
    PostInfo, 
    UserInfo,
    UserPicture } from './style'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src='https://hermes.dio.me/articles/cover/6458d9ec-0d25-4547-b7b1-25e101cafd65.jpg' alt='teste' />
                <Content>
                    <UserInfo>
                        <UserPicture src="https://github.com/pedrwsxd.png" alt="Foto do usuário" />
                            <div>
                                <h4>Pedro Henrick</h4>
                                <p>Há 8 minutos</p>
                            </div>
                    </UserInfo>
                    <PostInfo>
                        <h4>Projeto para curso de HTML e CSS</h4>
                        <p>Projeto feito para o curso de html e css no bootcamp dio do Global avanade... 
                            <strong>Saiba Mais!</strong></p>
                    </PostInfo>
                    <HasInfo>
                        <h4>#HTML #CSS #JavaScript</h4>
                        <p>
                            <BiSolidLike /> 16
                        </p>
                    </HasInfo>
                </Content>
        </CardContainer>
        
    )
}

export { Card } ;