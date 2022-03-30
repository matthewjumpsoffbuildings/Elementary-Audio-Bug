import { ElementaryPluginRenderer as core, el } from '@elemaudio/core'
import sex from './sex'
import inputGain from './input-gain'
import scope from './scope'

export const events = new EventTarget()

const mono = (input, side) => scope(
	sex( inputGain(input, side)),
	'out'+side
)

let coreReady = false
const render = () => {
	if(!coreReady) return
	core.render(
		mono( el.in({channel: 0}), 'L' ),
		mono( el.in({channel: 1}), 'R' ),
	)
}
export default render

core.on('playhead', (e) => {
	console.log(e)
})

core.on('snapshot', (e) => {
	if(e.source)
		events.dispatchEvent(new CustomEvent(e.source, {detail: e}))
})
core.on('meter', (e) => {
	if(e.source)
		events.dispatchEvent(new CustomEvent(e.source, {detail: e}))
})

core.on('load', (e) => {
	coreReady = true
	render()
})
core.initialize()