import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageKeys } from '@storage/storageConfig'
import { PlayerStorageDTO } from './PlayerStorageDTO'

export async function playerGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(
      `${StorageKeys.PLAYER_COLLECTION}-${group}`,
    )
    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : []
    return players
  } catch (err) {
    console.log(err)
    throw err
  }
}
