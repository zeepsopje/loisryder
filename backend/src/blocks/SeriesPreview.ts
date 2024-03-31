import { Block } from 'payload/types';

const SeriesPreview: Block = {
	slug: 'SeriesPreview',
	fields: [
		{
			name: 'title',
			type: 'text',
		},
		{
			name: 'text',
			type: 'text',
		},
	]
}

export default SeriesPreview
