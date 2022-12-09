import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Groups } from '@screens/Groups'
import { AddGroup } from '@screens/AddGroup'
import { Players } from '@screens/Players'
import { Routes } from './enum.routes'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName={Routes.groups}
      screenOptions={{ headerShown: false }}
    >
      <Screen name={Routes.groups} component={Groups} />
      <Screen name={Routes.add} component={AddGroup} />
      <Screen name={Routes.players} component={Players} />
    </Navigator>
  )
}
