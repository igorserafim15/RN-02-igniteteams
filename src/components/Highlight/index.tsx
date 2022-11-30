import { Container, Subtitle, Title } from './styles'

interface Props {
  title: string
  subtitle: string
}

export const Highlight = ({ title, subtitle }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
