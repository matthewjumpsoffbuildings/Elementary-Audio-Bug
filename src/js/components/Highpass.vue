<template lang="pug">
.highpass
	fieldset
		label #{name} Freq
		input(type="range" v-model.number="highpass.freq" min="2" max="300")
		input(v-model.number="highpass.freq") 
		| hZ
	fieldset
		label #{name} Q
		input(type="range" v-model.number="highpass.q" min="0" max="4" step="0.001")
		input(v-model.number="highpass.q")
</template>

<script lang="ts">
export default {
	props: {
		highpass: {
			type: Object,
		},
		name: {
			type: String,
			default: 'Highpass'
		}
	}
}
</script>