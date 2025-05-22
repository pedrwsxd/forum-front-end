"use client";

import React from 'react'

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { api } from '../../services/api'
import { Column, Container,LogarText ,LoginText , Row, SubTitleRegister, Title, TitleRegister, Wrapper } from './style'
import { IFormData, ILogin } from './types'
import { useRouter } from 'next/navigation';    



const schema = yup
    .object({
        name: yup.string().required('Nome é obrigatorio'),
        email: yup.string().email('Email não é valido').required('Email é obrigatorio'),
        password: yup.string().min(3, "No minimo 3 caracteres").required('Senha é obrigatorio'),
    })
    .required()

const Register = ({onClick}: ILogin) => {

    const router = useRouter(); 

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    console.log(isValid, errors);
    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.post('user   ', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });
            if (data) {
                alert('Conta criada com sucesso!');
            router.push('/login');
            }
        } catch (error) {
            alert('Erro ao criar conta. Tente novamente.');
        }
    };

    const handleClickLogin = () => {
        router.push('/login')
    }

    return (<>
        <Header />
        <Container>

            <Column>
                <Title>
                A plataforma para você aprender com experts, dominar as principais 
                tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleRegister>Comece agora grátis</TitleRegister>
                    <SubTitleRegister>Crie sua conta e make the change._</SubTitleRegister>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input control={control} name="name"  maxLength={50} errorMessage={errors?.name?.message} placeholder="Nome Completo" leftIcon={<MdPerson />} />
                        <Input control={control} name="email" maxLength={80} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input control={control} name="password" maxLength={30} errorMessage={errors?.password?.message} placeholder="Password" type="password" leftIcon={<MdLock />} />
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>

                    <Row>
                        <SubTitleRegister>
                        Ao clicar em "criar minha conta", declaro que 
                        aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </SubTitleRegister>
                    </Row>
                    <Row>
                        <LoginText>Já tenho conta. 
                        <LogarText onClick={handleClickLogin}>Fazer login.</LogarText>
                        </LoginText>
                    </Row>

                </Wrapper>
            </Column>
        </Container>


    </>
    )
}

export default Register;