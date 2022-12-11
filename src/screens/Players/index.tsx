import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { ListEmpty } from '@components/ListEmpty'
import { PlayerCard } from '@components/PlayerCard'
import { Alert, FlatList } from 'react-native'
import { Container, Form, HeaderList, NumberOfPlayers } from './styled'
import { AppError } from '@utils/AppError'
import { playerAddByGroup } from '@storage/player/playerAddByGroup'
import { playerGetByGroup } from '@storage/player/playerGetByGroup'

type RouteParams = {
  group: string
}

export const Players = () => {
  const [addedPlayerName, setAddedPlayerName] = React.useState('')
  const [team, setTeam] = React.useState('Time A')
  const [players] = React.useState([])
  const { group } = useRoute().params as RouteParams

  async function handleAddedPlayer() {
    if (addedPlayerName.trim().length === 0) {
      return Alert.alert(
        'Nova pessoa',
        'Informe o nome da pessoa para adicionar.',
      )
    }
    const AddedPlayer = {
      name: addedPlayerName,
      team,
    }
    try {
      await playerAddByGroup(AddedPlayer, group)
      const players = await playerGetByGroup(group)
      console.log(players)
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert('Nova pessoa', err.message)
      }
      console.log(err)
      Alert.alert('Nova pessoa', 'Não foi possível adicionar.')
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input
          onChangeText={setAddedPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" onPress={handleAddedPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          data={['Time A', 'Time B', 'Time C', 'Time D']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
      />
      <Button title="Remover turma" type="secondary" />
    </Container>
  )
}
