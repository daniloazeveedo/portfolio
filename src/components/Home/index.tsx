/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText } from './styles'
import { FiArrowRight } from 'react-icons/fi'

export function HomeHero() {
  return (
    <Container>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> Olá, o meu nome é
          </p>
          <h1>
            Danilo Azevedo
            <span className="animation">
              <Image
                width={200}
                height={200}
                src="/vectors/triangle.svg"
                alt="Imagem de um triângulo giratório"
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: ['Desenvolvedor Front-End'],
                autoStart: true,
                loop: true,
                skipAddStyles: true
              }}
            />
          </h2>

          <div className="button">
            <Link href={'#projects'}>
              <ButtonPrimary>
                <b>Conheça meu portfólio </b>
                <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
              </ButtonPrimary>
            </Link>
          </div>
        </HomeText>
        <ImgHome>
          <Image
            className="home-img"
            width={500}
            height={500}
            src="/home.png"
            alt="Imagem de apresentação do site"
            priority
          />

          <div className="code">
            <Image
              width={150}
              height={150}
              src="/vectors/dino.svg"
              alt="Dinossauro em estilo pixelado"
            />
          </div>
        </ImgHome>
      </Content>
    </Container>
  )
}
