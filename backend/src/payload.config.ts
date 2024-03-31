import path from 'path'

import payload from 'payload';
import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Media from './collections/Media'
import Pages from './collections/Pages'
import Series from './collections/Series'

import General from './globals/General';
import Header from './globals/Header';
import Nav from './globals/Nav';
import Footer from './globals/Footer';

const globals = [
	General,
	Header,
	Nav,
	Footer,
];
const collections = [
	Users,
	Pages,
	Media,
	Series,
];

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	globals,
	collections,
	endpoints: [
		{
			path: '/globals',
			method: 'get',
			handler: async (req, res, next) => {
				const response = {};
				const result = await Promise.all(
					globals.map(({ slug }) => payload.findGlobal({
						slug,
						depth: 2,
					}))
				);

				for (const i in result) {
					response[result[i].globalType] = result[i];
				}

				res.json(response);
			}
		}
	],
	editor: slateEditor({}),
	csrf: [
		'http://localhost:3000',
		'http://localhost:5173',
	],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	plugins: [payloadCloud()],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
})
