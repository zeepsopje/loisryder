import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
	slug: 'media',
	access: {
		read: () => true,
	},
	upload: {
		staticURL: '/media',
		staticDir: '../media',
		imageSizes: [
			{
				name: 'thumbnail',
				width: 400,
				height: 300,
				position: 'centre',
			},
			{
				name: 'card',
				width: 768,
				height: 1024,
				position: 'centre',
			},
			{
				name: 'tablet',
				width: 1024,
				height: undefined,
				position: 'centre',
			},
		],
	},
	fields: [
		{
			name: 'alt',
			type: 'text',
		},
	],
}

export default Media;
