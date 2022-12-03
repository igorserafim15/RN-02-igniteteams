import { TouchableOpacityProps } from 'react-native'
import { Container, Title, ButtonTypeStyleProps } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  type?: ButtonTypeStyleProps
}

export const Button = ({ title, type = 'primary', ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
