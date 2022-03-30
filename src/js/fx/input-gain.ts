import state from '../state'
import { el } from '@elemaudio/core'
import scope from './scope'
import { c } from './util'

export default function(input, side) {
	const gained = el.mul(
		input,
		c('inputGain', state.inputGain),
	)
	return scope(gained, 'in'+side)
}
