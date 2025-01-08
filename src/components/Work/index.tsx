import Link from 'next/link'
import work from '../../data/works'
import { Container, Title } from '../../styles/styles'
import { WorkContainer, WorkContent } from './styles'
import { AiOutlineRightCircle } from 'react-icons/ai'
import { BiBarChartSquare } from 'react-icons/bi'

interface WorkItem {
  id: number
  url: string
  img: string
  title: string
  subTitle: string
}

export function Work() {
  // Função para mapear os itens de trabalho
  const renderWorkItems = (workItem: WorkItem) => (
    <WorkContent key={workItem.id} imgUrl={workItem.img}>
      <div className="workItem">
        <div className="overlay" />
        <div className="text">
          <h1>#{workItem.title}</h1>
          <h2>{workItem.subTitle}</h2>
        </div>
      </div>
      <Link href={`/work/${workItem.url}`} passHref>
        <button type="button" aria-label={`Ver mais sobre ${workItem.title}`}>
          Ver mais <AiOutlineRightCircle />
        </button>
      </Link>
    </WorkContent>
  )

  return (
    <Container id="work">
      <Title>
        Trabalho
        <span>
          <BiBarChartSquare /> Work
        </span>
      </Title>

      <WorkContainer>
        {work.map(renderWorkItems)}
      </WorkContainer>
    </Container>
  )
}
