import React from 'react'
import { Alert } from 'react-native'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '@routes/enum.routes'
import { Container, Content, Icon } from './styles'
import { insertGroupIntoStorage } from '@storage/group/insertGroupIntoStorage'

export const AddGroup = () => {
  const navigation = useNavigation()
  const [group, setGroup] = React.useState('')

  async function handleAdded() {
    if (group.trim().length === 0) {
      return Alert.alert('Novo grupo', 'Informe o nome da turma.')
    }
    await insertGroupIntoStorage(group)
    navigation.navigate(Routes.players, { group })
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" onPress={handleAdded} />
      </Content>
    </Container>
  )
}
