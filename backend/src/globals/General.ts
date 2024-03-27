import { GlobalConfig } from 'payload/types'

const General: GlobalConfig = {
	slug: 'general',
	fields: [
		{
			type: 'tabs',
			tabs: [
				{
					name: 'presets',
					fields: [
						{
							name: 'home',
							required: true,
							type: 'relationship',
							relationTo: 'pages',
							admin: {
								description: 'Choose which page to show on the front page'
							},
						},
						{
							name: 'gallery',
							label: 'Gallery homepage',
							required: true,
							type: 'relationship',
							relationTo: 'pages',
							admin: {
								description: 'Choose which page acts as the gallery'
							},
						},
					]
				}
			]
		}
	]
}

export default General
