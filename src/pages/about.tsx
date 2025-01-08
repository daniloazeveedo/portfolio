import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Links } from '../components/Links'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title } from '../styles/styles'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Danilo Azevedo </title>
        <meta
          name="description"
          content="Meu nome é Danilo Azevedo, sou um desenvolvedor front-end React do Brasil."
        />
        <meta property="og:title" content="About | Danilo Azevedo" />
        <meta
          property="og:description"
          content="Meu nome é Danilo Azevedo, sou um desenvolvedor front-end React do Brasil."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            <p>../about</p>
            Sobre
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img
                className="AboutImg"
                src="/Evander.webp"
                alt="Imagem de perfil de Danilo Azevedo"
              />

              <div className="links">
                <ul>
                  <li>
                    <Link href="https://github.com/daniloazeveedo" passHref>
                      <a target="_blank" aria-label="Link para o Github">
                        <AiFillGithub size={25} /> @Danilo Azevedo
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/daniloazeveedo/" passHref>
                      <a target="_blank" aria-label="Link para o Linkedin">
                        <BsLinkedin size={25} /> @daniloazeveedo
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://api.whatsapp.com/send?phone=5511995085916" passHref>
                      <a target="_blank" aria-label="Link para o WhatsApp">
                        <RiWhatsappFill size={25} /> +55 (14) 98116-1555
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.discordapp.com/users/daniloazeveedo" passHref>
                      <a
                        className="dc"
                        target="_blank"
                        aria-label="Link para o Discord"
                      >
                        <FaDiscord size={25} /> @daniloazeveedo
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:daniloazeveedo@gmail.com" passHref>
                      <a
                        className="email"
                        target="_blank"
                        aria-label="Link para o email"
                      >
                        <GrMail size={25} /> @daniloazeveedo@gmail.com
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                  Vamos conversar, quem sabe criar um projeto incrível juntos?
                </h3>
                <p>Me mande uma mensagem! 😉</p>
                <Link href="/contact" passHref>
                  <a>
                    <ButtonAlt>Contato</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
            <p>
  Meu nome é Danilo Azevedo e sou um desenvolvedor front-end júnior no Brasil, com uma verdadeira paixão por criar interfaces interativas e funcionalidades inovadoras para aplicativos web. Tenho especialização em React.js e Next.js, e estou em constante evolução, sempre aprendendo novas tecnologias para aprimorar minhas habilidades.
</p>

<p>
  Minha trajetória começou na faculdade, onde me aprofundei no curso de Análise e Desenvolvimento de Sistemas. Em 2024, decidi focar de forma mais intensa no aprendizado de HTML, CSS e JavaScript. Desde então, venho me dedicando a cursos da Alura e aplicando os conceitos em projetos práticos, buscando sempre melhorar meu conhecimento e experiência.
</p>

<p>
  Atualmente, continuo ampliando minha expertise em tecnologias como HTML, CSS e JavaScript, além de me aprofundar em frameworks como React.js e Next.js. Também estou iniciando meus estudos em Python, com foco em Data Science, para expandir minha atuação no desenvolvimento de soluções mais completas.
</p>

<p>
  Sempre em busca de novos desafios, estou motivado para crescer profissionalmente e colaborar em projetos inovadores, trazendo minha energia e dedicação para o campo do desenvolvimento web.
</p>

            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  )
}
