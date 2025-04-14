"use client";


import React, { use } from 'react'
import { Header } from '../components/header'
import { Button } from '../components/button'
import bannerImage from '@/assets/banner.png'
import Image from 'next/image';
import { Container, TitleContent, TitleHighlight, Title } from './style'
import { useRouter } from 'next/navigation';


export default function Home() {

    const router = useRouter();

  const handleClickSignIn = () => {
     router.push("/login");
  }

  return (<>
      <Header />
      <Container>

      <div>
          <Title>
              <TitleHighlight>
              Implemente
              <br />
              </TitleHighlight>
              o seu futuro global agora!
          </Title>
          <TitleContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras
              do mundo e encare seu novo desafio profissional, evoluindo em comunidade 
              com os melhores experts.
          </TitleContent>
          <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
      </div>
      
      <div>
          <Image src={bannerImage} alt="Imagem principal" />
      </div>
      </Container>


  </>
  )
}
