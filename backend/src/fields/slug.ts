import type { Field } from 'payload/types'

import deepMerge from '../util/deepMerge'
import formatSlug from '../util/formatSlug'

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field

export const slugField: Slug = (fieldToUse = 'title', overrides = {}) =>
deepMerge<Field, Partial<Field>>(
	{
		name: 'slug',
		label: 'Slug',
		type: 'text',
		index: true,
		admin: {
			position: 'sidebar',
			description: 'URL friendly name. Will be automatically created if left blank.',
		},
		hooks: {
			beforeValidate: [formatSlug(fieldToUse)],
		},
	},
	overrides,
)
