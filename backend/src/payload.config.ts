import path from 'path'

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

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	editor: slateEditor({}),
	globals: [
		General,
		Header,
		Nav,
		Footer,
	],
	collections: [
		Users,
		Pages,
		Media,
		Series,
	],
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
