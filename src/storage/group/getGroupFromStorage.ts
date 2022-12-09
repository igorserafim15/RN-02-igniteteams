import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageKeys } from '@storage/storageConfig'

export async function getGroupFromStorage() {
  try {
    const storage = await AsyncStorage.getItem(StorageKeys.GROUP_COLLECTION)
    const groups: string[] = storage ? JSON.parse(storage) : []
    return groups
  } catch (error) {
    console.log(error)
    throw error
  }
}
