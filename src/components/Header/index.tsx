import { Container, Logo, BackButton, BackIcon } from './styles'
import LogoImg from '@assets/logo.png'

interface Props {
  showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: Props) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  )
}
