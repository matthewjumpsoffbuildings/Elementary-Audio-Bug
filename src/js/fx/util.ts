import { el } from '@elemaudio/core'

export const c = (key, value) => el.const({key, value})

export const gain2db = (gain) => el.max(-120, el.mul(20, el.log(gain)))