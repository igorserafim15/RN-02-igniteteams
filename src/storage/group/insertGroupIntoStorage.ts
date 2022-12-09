import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageKeys } from '@storage/storageConfig'
import { AppError } from '@utils/AppError'
import { getGroupFromStorage } from './getGroupFromStorage'
import { Alert } from 'react-native'

export async function insertGroupIntoStorage(addedGroup: string) {
  try {
    const storadGroups = await getGroupFromStorage()
    const groupAlreadyExists = storadGroups.includes(addedGroup)

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.')
    }

    const groups = [...storadGroups, addedGroup]
    await AsyncStorage.setItem(
      StorageKeys.GROUP_COLLECTION,
      JSON.stringify(groups),
    )
  } catch (error) {
    if (error instanceof AppError) {
      return Alert.alert('Novo grupo', error.message)
    }
    Alert.alert('Novo grupo', 'Algo deu errado. Por favor, tente novamente.')
    console.log(error)
  }
}
