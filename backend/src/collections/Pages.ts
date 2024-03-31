import { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug';

import HomeIntro from '../blocks/HomeIntro';
import SeriesPreview from '../blocks/SeriesPreview';

const Pages: CollectionConfig = {
	slug: 'pages',
	admin: {
		useAsTitle: 'title',
	},
	endpoints: [
		{
			path: '/slug/:slug',
			method: 'get',
			handler: async (req, res, next) => {
				const data = await req.payload.find({
					collection: 'pages',
					where: {
						slug: {
							equals: req.params.slug
						},
					},
					limit: 1,
					pagination: false,
				});

				if (data.docs.length) {
					res.status(200).send(data.docs[0]);
				} else {
					res.sendStatus(404);
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
					label: 'Page',
					fields: [
						{
							type: 'row',
							fields: [
								{
									name: 'title',
									type: 'text',
									required: true,
									admin: {
										width: '50%',
									}
								},
							]
						},
					]
				},
				{
					label: 'Layout',
					fields: [
						{
							type: 'blocks',
							name: 'blocks',
							blocks: [
								HomeIntro,
								SeriesPreview,
							],
						},
					]
				}
			]
		},
	],
}

export default Pages
