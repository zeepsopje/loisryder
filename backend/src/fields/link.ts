import type { Field } from 'payload/types'

import deepMerge from '../util/deepMerge'

type LinkType = (options?: {
	disableLabel?: boolean
	overrides?: Record<string, unknown>
}) => Field

const link: LinkType = ({ disableLabel = false, overrides = {} } = {}) => {
	const linkResult: Field = {
		name: 'link',
		type: 'group',
		admin: {
			hideGutter: true,
		},
		fields: [
			{
				type: 'row',
				fields: [
					{
						name: 'type',
						type: 'radio',
						options: [
							{
								label: 'Internal link',
								value: 'reference',
							},
							{
								label: 'Custom URL',
								value: 'custom',
							},
						],
						defaultValue: 'reference',
						admin: {
							layout: 'horizontal',
							width: '50%',
						},
					},
					{
						name: 'newTab',
						label: 'Open in new tab',
						type: 'checkbox',
						admin: {
							width: '50%',
							style: {
								alignSelf: 'flex-end',
							},
						},
					},
				],
			},
		],
	}

	const linkTypes: Field[] = [
		{
			name: 'reference',
			label: 'Document to link to',
			type: 'relationship',
			relationTo: ['pages'],
			required: true,
			maxDepth: 1,
			admin: {
				condition: (_, siblingData) => siblingData?.type === 'reference',
			},
		},
		{
			name: 'url',
			label: 'Custom URL',
			type: 'text',
			required: true,
			admin: {
				condition: (_, siblingData) => siblingData?.type === 'custom',
			},
		},
	]

	if (!disableLabel) {
		linkTypes.map(linkType => ({
			...linkType,
			admin: {
				...linkType.admin,
				width: '50%',
			},
		}))

		linkResult.fields.push({
			type: 'row',
			fields: [
				...linkTypes,
				{
					name: 'label',
					label: 'Label',
					type: 'text',
					required: true,
					admin: {
						width: '50%',
					},
				},
			],
		})
	} else {
		linkResult.fields = [...linkResult.fields, ...linkTypes]
	}

	return deepMerge(linkResult, overrides)
}

export default link
