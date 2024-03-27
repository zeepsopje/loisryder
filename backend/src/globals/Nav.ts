import { GlobalConfig } from 'payload/types'

const General: GlobalConfig = {
	slug: 'nav',
	label: 'Navigation',
	fields: [
		{
			name: 'menuItems',
			type: 'relationship',
			hasMany: true,
			relationTo: 'pages',
			maxRows: 4,
		}
	]
}

export default General
