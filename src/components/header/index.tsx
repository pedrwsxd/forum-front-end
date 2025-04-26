"use client";

import React from 'react'
import logo from '../../assets/logo.svg'
import Image from 'next/image'
import { Button } from '../button'
import {
    Container,
    BuscarInputContainer,
    Input,
    Row,
    UserPicture,
    Menu,
    MenuRight,
    Wrapper,
    ButtonSingOut
} from './style'
import { IHeader } from './types'
import { useAuth } from '../../hooks/useAuth'
import { useRouter } from 'next/navigation';



const Header = ({ onClick }: IHeader) => {

    const router = useRouter();
    const { user, handleSignOut } = useAuth();


    const handleClickSignIn = () => {
        router.push('/login')
    }

    const handleClickRegister = () => {
        router.push('/register')
    }

    const handleClickHome = () => {
        router.push('/')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Image src={logo} width={50} alt="Logo do PH" onClick={handleClickHome} />
                    {user && (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    )}
                </Row>
                <Row>
                    {
                        user ? (
                            <>
                                <UserPicture src='https://github.com/pedrwsxd.png' />
                                <ButtonSingOut onClick={handleSignOut}>
                                    Sair
                                </ButtonSingOut>
                            </>

                        ) : (
                            <>
                                <MenuRight onClick={handleClickHome}>Home</MenuRight>
                                <Button title="Entrar" onClick={handleClickSignIn} />
                                <Button title="Cadastrar" onClick={handleClickRegister} />
                            </>
                        )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }