import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Container } from './styles'
import { FlatList } from 'react-native'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
import { Routes } from '@routes/enum.routes'

export const Groups = () => {
  const navigation = useNavigation()
  const [groups] = React.useState<string[]>([])

  function handleAddGroup() {
    navigation.navigate(Routes.add)
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={{ flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleAddGroup} />
    </Container>
  )
}
