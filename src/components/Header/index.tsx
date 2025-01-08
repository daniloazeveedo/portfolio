import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Header() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <HeaderContainer style={{ position: 'fixed' }}>
      <div className="mobile-content">
        <Link href={'/'}>
          <div className="logo">
            <Image
              className="logo"
              width={30}
              height={30}
              src="/icon.svg"
              alt="logo"
            />
          </div>

          {'Danilo'.split('').map((letter, index) => {
            return (
              <span key={index} className="logo-name">
                {letter}
              </span>
            )
          })}
        </Link>

        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={25} weight="bold" />
          ) : (
            <List size={25} weight="bold" />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link href={'/about'}>
              <span>Sobre</span>
            </Link>
          </li>

          <li>
            <Link href={'/experience'}>
              <span>Experiência</span>
            </Link>
          </li>

          <li>
            <Link href={'/projects'}>
              <span>Projetos</span>
            </Link>
          </li>

          <li>
            <Link href={'/resume'}>
              <span>Resume</span>
            </Link>
          </li>

          <li>
            <Link href={'/contact'}>
              <span>Contato</span>
            </Link>
          </li>
        </ul>

        <Icons>
          <Link href={'https://github.com/daniloazeveedo'} target="_blank" aria-label="Link para o Github">
            <FiGithub />
          </Link>
          <Link href={'https://www.linkedin.com/in/daniloazeveedo/'} target="_blank" aria-label="Link para o Linkedin">
            <FiLinkedin />
          </Link>
          <Link href={'https://api.whatsapp.com/send?phone=5511995085916'} target="_blank" aria-label="Link para entrar em contato via whatsapp">
            <FaWhatsapp />
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  )
}
