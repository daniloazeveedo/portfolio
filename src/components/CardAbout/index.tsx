import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={500}
            height={500}
            className="AboutImg"
            src="/about.svg"
            alt="Imagem de perfil"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>Deixe-me apresentar</h2>
            <p>
              Sou um desenvolvedor júnior, apaixonado por projetar e codificar. 
              Estou aprendendo constantemente e me especializando na criação de interfaces e funcionalidades para aplicativos web com React.js e Next.js. 
              Atualmente, estou expandindo meus conhecimentos e estudando Python para Data Science,para aprimorar minhas habilidades em análise de dados e automação.
              <br />
              Você pode conhecer mais sobre o meu perfil e o meu trabalho
              navegando pelo website.
            </p>

            <strong>
              P.S. este site é código aberto e está disponível no{' '}
              <Link href={'https://github.com/daniloazeveedo'} target="_blank">
                Github
              </Link>
            </strong>
          </div>

          <div className='aboutButton'>
            <Link href={'/contact'} target="_blank">
              <Button>
                Entre em contato
                <TelegramLogo
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem',
                  }}
                  size={16}
                  weight="bold"
                />
              </Button>
            </Link>
            <Link href={'/about'} target="_blank">
              <ButtonAlternatives>
                Ler mais
                <ArrowRight
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem'
                  }}
                  weight="bold"
                  size={16}
                />
              </ButtonAlternatives>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  )
}
