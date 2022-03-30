import state, { sexEQ } from '../state'
import { c } from './util'
import { el } from '@elemaudio/core'

export default function(input) {
	if(state.disableSex)
		return input

	const s = sexEQ.value
	const hipassed = el.highpass(
		c('sex.highpass.freq', s.highpass.freq),
		c('sex.highpass.q', s.highpass.q),
		input
	)

	const peak = el.peak(
		c('sex_peak.freq', s.peak.freq),
		c('sex_peak.q', s.peak.q),
		c('sex.peak.gain', s.peak.gain),
		hipassed
	)

	const highshelf = el.highshelf(
		c('sex.highshelf.freq', s.highshelf.freq),
		c('sex.highshelf.q', s.highshelf.q),
		c('sex.highshelf.gain', s.highshelf.gain),
		peak
	)

	return highshelf
}
