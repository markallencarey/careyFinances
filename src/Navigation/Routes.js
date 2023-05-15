import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation'
import { MainStack } from './MainStack'
import { AuthStack } from './AuthStack'
import { AuthContext } from '../Context/AuthProvider'
import { Containers, Colors, Misc } from '../Styles/Index'
const MyTheme = {
  dark: false,
  colors: {
    primary: Colors.primary,
    background: Colors.background,
    card: Colors.surface,
    text: Colors.black,
    border: Misc.border.borderColor,
    notification: Colors.error,
}, }
export const Routes = () => {
  const { user, setUser } = useContext(AuthContext)
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <NavigationContainer theme={MyTheme}>{user ? <MainStack />
    </SafeAreaView>
) }
const styles = StyleSheet.create({
  safeAreaView: {
    ...Containers.safeAreaView,
  },
})