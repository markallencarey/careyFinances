import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Containers } from '../Styles/Index'
export const Home = () => {
	return (
		<View style={styles.content}>
			<Text>Home.js</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	content: {
		...Containers.content,
	},
})
