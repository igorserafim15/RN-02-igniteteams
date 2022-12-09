import { useNavigation } from '@react-navigation/native'
import { Container, Logo, BackButton, BackIcon } from './styles'
import LogoImg from '@assets/logo.png'
import { Routes } from '@routes/enum.routes'

interface Props {
  showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: Props) => {
  const navigation = useNavigation()
  function handleGoBack() {
    navigation.navigate(Routes.groups)
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  )
}
