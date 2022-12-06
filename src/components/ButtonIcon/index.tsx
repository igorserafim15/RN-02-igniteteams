import { TouchableOpacityProps } from 'react-native'
import { ButtonIconStylePropsTyping, Container, Icon } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

interface Props extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconStylePropsTyping
}

export const ButtonIcon = ({ icon, type = 'primary', ...props }: Props) => {
  return (
    <Container {...props}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
