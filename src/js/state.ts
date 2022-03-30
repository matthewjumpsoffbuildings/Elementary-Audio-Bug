import { reactive, computed, watch, ref } from "vue"
import { merge, throttle } from 'lodash'

import initState, { State } from "./init-state"
const localStorageState = window.localStorage.getItem('state'),
	savedState = localStorageState ? JSON.parse(localStorageState) : {},
	state:State = reactive(merge(JSON.parse(JSON.stringify(initState)), savedState))

export default state
export const sexEQ = computed(() => state.sexes[state.sex])

import render from './fx/render'
const throttleRender = throttle(render, 100)
watch(state, () => {
	if(!state.sexes[state.sex]) {
		state.sex = 0
		return
	}
	throttleRender()
	// console.log(JSON.parse(JSON.stringify(state)))
	window.localStorage.setItem('state', JSON.stringify(state))
}, {deep: true})