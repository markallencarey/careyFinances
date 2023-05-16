import * as Buttons from './Buttons'
import * as Colors from './Colors'
import * as Fonts from './Fonts'
import * as Images from './Images'
import * as Misc from './Misc'
import * as Shadows from './Shadows'
import * as Window from './Window'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	safeAreaView: {
		width: '100%',
		height: '100%',
	},
	content: {
		width: '100%',
		height: '100%',
		padding: Misc.padding,
	},
	appView: {
		width: Window.width,
		height: Window.height,
		backgroundColor: Colors.background,
		...centered,
	},
})
export const safeAreaView = styles.safeAreaView
export const content = styles.content
export const appView = styles.appView
