import { GlobalConfig } from 'payload/types'

const General: GlobalConfig = {
	slug: 'header',
	fields: [
		{
			name: 'title',
			label: 'Header title',
			defaultValue: 'Lois Ryder',
			required: true,
			type: 'text',
			admin: {
				description: 'The large title to display in the header'
			}
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
			required: true,
		}
	]
}

export default General
