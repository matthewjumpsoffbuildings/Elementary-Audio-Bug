export const initState = {
	inputGain: 1,
	disableSex: false,
	sex: 0,
	sexes: [
		{
			name: 'Male',
			highpass: {
				freq: 100,
				q: 1
			},
			peak: {
				freq: 1000,
				q: 1,
				gain: 0,
			},
			highshelf: {
				freq: 4000,
				q: 1,
				gain: 0,
			},
		},
		{
			name: 'Female',
			highpass: {
				freq: 300,
				q: 1
			},
			peak: {
				freq: 2000,
				q: 0.1,
				gain: 0
			},
			highshelf: {
				freq: 4000,
				q: 1,
				gain: 0
			},
		},
	],
}
export default initState
export type State = typeof initState