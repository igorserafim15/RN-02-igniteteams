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
import { FlatList } from 'react-native'
import { Container, Form, HeaderList, NumberOfPlayers } from './styled'

type RouteParams = {
  group: string
}

export const Players = () => {
  const [team, setTeam] = React.useState('Time A')
  const [players] = React.useState([])
  const { group } = useRoute().params as RouteParams

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
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
