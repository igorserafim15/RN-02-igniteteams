import React from 'react'
import { Routes } from '@routes/enum.routes'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getGroupFromStorage } from '@storage/group/getGroupFromStorage'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Container } from './styles'
import { FlatList } from 'react-native'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'

export const Groups = () => {
  const navigation = useNavigation()
  const [groups, setGroups] = React.useState<string[]>([])

  async function getGroups() {
    const data = await getGroupFromStorage()
    setGroups(data)
  }

  useFocusEffect(
    React.useCallback(() => {
      getGroups()
    }, []),
  )

  function handleToAddGroup() {
    navigation.navigate(Routes.add)
  }

  function handleToGroup(group: string) {
    navigation.navigate(Routes.players, { group })
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleToGroup(item)} />
        )}
        contentContainerStyle={{ flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleToAddGroup} />
    </Container>
  )
}
