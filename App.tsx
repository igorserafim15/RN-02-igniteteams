/* eslint-disable camelcase */
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import theme from '@theme/index'
// import { Groups } from '@screens/Groups'
// import { AddGroup } from '@screens/AddGroup'
import { Loading } from '@components/Loading'
import { Players } from '@screens/Players'

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoader ? <Players /> : <Loading />}
    </ThemeProvider>
  )
}
