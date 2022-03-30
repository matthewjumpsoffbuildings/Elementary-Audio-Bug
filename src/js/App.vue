<template lang="pug">
.content
	header(style="width: 100%")
		button(@click="reload()") Reload
		button(@click="copy()") Copy Config

	.params
		section
			h1 Sex
			fieldset
				select(v-model="sex")
					for sex, index in sexes
						option(:value="index")= sex.name
				button(@click="sexes.push(JSON.parse(JSON.stringify(sexes[sex])))") Add
				button(@click="sexes.splice(sex, 1)") Delete
				button(@click="disableSex = !disableSex")= disableSex ? 'Enable' : 'Disable'

			fieldset
				label Name
				input(v-model="sexes[sex].name")
			
			Highpass(:highpass="sexes[sex].highpass")
			Bell(:bell="sexes[sex].peak")
			Bell(:bell="sexes[sex].highshelf" name="Highshelf")
		
</template>

<script lang="ts">
import state from './state'
import Highpass from './components/Highpass.vue'
import Bell from './components/Bell.vue'

export default {
	data() {
		return state
	},
	components: {
		Highpass, Bell,
	},
	methods: {
		reload() {
			location.reload()
		},
		copy() {
			window.navigator.clipboard.writeText(JSON.stringify(state))
		},
	},
}
</script>

<style scoped>
.params {
	display: flex;
	overflow-y: scroll;
}
section {
	width: 33%;
}
</style>

<style>
input[type="range"] {
	width: 100%;
}
</style>