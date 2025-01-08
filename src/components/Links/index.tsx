import Link from 'next/link'
import { Icons } from './styles'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Links() {
  return (
    <>
      <Icons>
        <Link href={'https://github.com/daniloazeveedo'} target="_blank" aria-label="Link para o Github">
          <FiGithub />
        </Link>
        <Link href={'https://www.linkedin.com/in/daniloazeveedo/'} target="_blank" aria-label="Link para o Linkedin">
          <FiLinkedin />
        </Link>
        <Link href={'https://api.whatsapp.com/send?phone=5514981161555'} target="_blank" aria-label="Link para entrar em contato via whatsapp">
          <FaWhatsapp />
        </Link>
        <div className="barra"></div>
      </Icons>
    </>
  )
}
