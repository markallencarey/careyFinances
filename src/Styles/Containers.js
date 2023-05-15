import * as Misc from './Misc'
import * as Colors from './Colors'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
export const black = ''
export const blackItalic = ''
export const extraBold = ''
export const extraBoldItalic = ''
export const bold = ''
export const boldItalic = ''
export const semiBold = ''
export const semiBoldItalic = ''
export const medium = ''
export const mediumItalic = ''
export const regular = ''
export const regularItalic = ''
export const light = ''
export const lightItalic = ''
export const extraLight = ''
export const extraLightItalic = ''
export const thin = ''
export const thinItalic = ''
const standardScreenHeight = 680
const styles = StyleSheet.create({
	h1: {
		fontSize: RFValue(30, standardScreenHeight),
		fontFamily: black,
		...Misc.shadowRegular,
	},
	h2: {
		color: Colors.white,
		fontSize: RFValue(23, standardScreenHeight),
		fontFamily: extraBold,
		...Misc.shadowLight,
	},
	body: {
		color: Colors.white,
		marginTop: Misc.margin,
		fontSize: RFValue(16, standardScreenHeight),
		fontFamily: regular,
	},
	smBtn: {
		color: Colors.black,
		fontFamily: medium,
		fontSize: RFValue(16, standardScreenHeight),
	},
	lgBtn: {
		color: Colors.black,
		fontFamily: semiBold,
		fontSize: RFValue(16, standardScreenHeight),
	},
})
export const h1 = styles.h1
export const h2 = styles.h2
export const body = styles.body
export const smBtn = styles.smBtn
export const lgBtn = styles.lgBtn
