import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { AuthProvider } from './src/Context/AuthProvider'
import { Routes } from './src/Navigation/Routes'
import { Containers } from './src/Styles/Index'
const App = () => {
	useEffect(() => {
		SplashScreen.hide()
	})
	return (
		<AuthProvider>
			<View style={styles.appView}>
				<Routes />
			</View>
		</AuthProvider>
	)
}
export default App
const styles = StyleSheet.create({
	appView: {
		...Containers.appView,
	},
})
