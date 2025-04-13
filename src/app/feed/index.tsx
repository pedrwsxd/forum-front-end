"use client";

import React from 'react'
import { Header } from '../../components/header'
import { Card } from '../../components/card'
import { UserInfo } from '../../components/userInfo'
import { Container, Column, Title, TitleHighlight } from './style'
import { AuthContext } from '../../context/auth'

const Feed = () => {

    return (<>
        <Header />
        <Container>
            <Column flex={3}>
            <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
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