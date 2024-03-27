import { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug';

const Series: CollectionConfig = {
	slug: 'series',
	admin: {
		useAsTitle: 'title',
	},
	endpoints: [
		{
			path: '/slug/:slug',
			method: 'get',
			handler: async (req, res, next) => {
				const data = await req.payload.find({
					collection: 'series',
					where: {
						slug: {
							equals: req.params.slug
						},
					},
					limit: 1,
					pagination: false,
				});

				if (data) {
					res.status(200).send(data.docs[0]);
				}
			},
		},
	],
	fields: [
		slugField(),
		{
			type: 'tabs',
			tabs: [
				{
					label: 'General',
					fields: [
						{
							name: 'title',
							type: 'text',
							required: true,
						},
						{
							name: 'text',
							type: 'textarea',
							required: true,
							admin: {
								description: 'Short description about this series'
							}
						},
						{
							name: 'pictures',
							type: 'array',
							maxRows: 7,
							admin: {
								description: 'Collection of pictures to give a general impression of the artwork series. Maximum of 7 allowed.'
							},
							fields: [
								{
									name: 'image',
									type: 'upload',
									relationTo: 'media',
									required: true,
								},
								{
									name: 'isLandscape',
									label: 'Show in landscape',
									type: 'checkbox',
									defaultValue: false,
								}
							]
						}
					]
				},
				{
					label: 'Artwork',
					fields: [
						{
							name: 'artworks',
							type: 'array',
							fields: [
								{
									name: 'image',
									type: 'upload',
									relationTo: 'media',
									required: true,
								},
								{
									name: 'isLandscape',
									label: 'Show in landscape',
									type: 'checkbox',
									defaultValue: false,
								},
								{
									type: 'row',
									fields: [
										{
											type: 'text',
											name: 'year',
											required: true,
											admin: {
												width: '50%'
											}
										},
										{
											type: 'select',
											name: 'type',
											required: true,
											options: [
												'canvas',
											],
											admin: {
												width: '50%'
											}
										},
									]
								}
							]
						}
					]
				}
			]
		}
	]
}

export default Series
