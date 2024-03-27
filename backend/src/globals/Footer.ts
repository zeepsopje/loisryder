import { GlobalConfig } from 'payload/types'
import link from '../fields/link'

const Footer: GlobalConfig = {
	slug: 'footer',
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
		},
        link(),
	]
}

export default Footer
