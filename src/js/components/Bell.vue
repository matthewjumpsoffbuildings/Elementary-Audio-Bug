<template lang="pug">
.bell
	fieldset
		label #{name} Freq
		input(type="range" v-model.number="bell.freq" min="0" max="20000")
		input(v-model.number="bell.freq")
		| hZ
	fieldset
		label #{name} Gain dB
		input(type="range" v-model.number="bell.gain" min="-10" max="10" step="0.01")
		input(v-model.number="bell.gain")
		| dB
	fieldset
		label #{name} Q
		input(type="range" v-model.number="bell.q" min="0" max="6" step="0.001")
		input(v-model.number="bell.q")
</template>

<script lang="ts">
export default {
	props: {
		bell: {
			type: Object
		},
		name: {
			type: String,
			default: 'Bell',
		}
	}
}
</script>