import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@utils/AppError'
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { StorageKeys } from '../storageConfig'
import { playerGetByGroup } from './playerGetByGroup'

export async function playerAddByGroup(
  addedPlayer: PlayerStorageDTO,
  group: string,
) {
  try {
    const storedPlayers = await playerGetByGroup(group)
    const playerAlreadyAdded = storedPlayers.filter(
      (player) => player.name === addedPlayer.name,
    )
    if (playerAlreadyAdded.length > 0) {
      throw new AppError('Essa pessoa já está adicionada em um time aqui.')
    }
    const allCurrentPlayers = [...storedPlayers, addedPlayer]
    await AsyncStorage.setItem(
      `${StorageKeys.PLAYER_COLLECTION}-${group}`,
      JSON.stringify(allCurrentPlayers),
    )
  } catch (err) {
    console.log(err)
    throw err
  }
}
