import type { FieldHook } from 'payload/types'

const format = (val: string): string =>
	val
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '')
		.toLowerCase()

const formatSlug = (fallback: string): FieldHook => (test) => {
	const { operation, value, originalDoc, data } = test;

	if (typeof value === 'string' && value) {
		return format(value)
	}

	const fallbackData = data?.[fallback] || originalDoc?.[fallback]

	if (fallbackData && typeof fallbackData === 'string') {
		return format(fallbackData)
	}
	
	return value
}

export default formatSlug
