import { CollectionConfig } from 'payload/types'
import HomeIntro from '../blocks/HomeIntro';
import { slugField } from '../fields/slug';

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
							],
						},
					]
				}
			]
		},
	],
}

export default Pages
