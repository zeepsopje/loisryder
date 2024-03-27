import { Block } from 'payload/types';

const HomeIntro: Block = {
	slug: 'HomeIntro',
	fields: [
		{
			name: 'title',
			type: 'text',
		},
		{
			type: 'row',
			fields: [
				{
					name: 'text',
					type: 'textarea',
				},
				{
					type: 'textarea',
					name: 'quote',
				},
			]
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
		},
	]
}

export default HomeIntro
