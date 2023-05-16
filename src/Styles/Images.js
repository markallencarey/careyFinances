import * as Misc from './Misc'
import * as Window from './Window'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
	thumbnail: {
		width: Window.width * 0.2,
		height: Window.width * 0.2,
		borderRadius: Misc.borderRadius,
	},
})
export const thumbnail = styles.thumbnail
