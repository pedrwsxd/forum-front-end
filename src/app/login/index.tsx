"use client";

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { MdEmail, MdLock } from 'react-icons/md'
import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './style'
import { IFormData, ILogin} from './types'
import { useAuth } from '../../hooks/useAuth'


const schema = yup
    .object({
        email: yup.string().email('Email não é valido').required('Email é obrigatorio'),
        password: yup.string().min(3, "No minimo 3 caracteres").required('Senha é obrigatorio'),
    })
    .required()

const Login = ({onClick}: ILogin) => {

    const navigate = useNavigate();
    const { handleLogin } = useAuth();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    console.log(isValid, errors);

    const onSubmit = async (formData: IFormData) => {
       handleLogin(formData);
    };

    const handleClickRegister = () => {
        navigate('/register')
    }

    return (<>
        <Header />
        <Container>

            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e
                    entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu login</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input control={control} name="email" errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input control={control} name="password" errorMessage={errors?.password?.message} placeholder="senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>

                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText onClick={handleClickRegister}>Criar conta</CriarText>
                    </Row>

                </Wrapper>
            </Column>
        </Container>


    </>
    )
}

export default Login;