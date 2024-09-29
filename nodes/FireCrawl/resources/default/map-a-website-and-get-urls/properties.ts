/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'POST /map',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Default'],
				operation: ['Map A Website And Get Urls'],
			},
		},
	},
	{
		displayName: 'Url',
		name: 'url',
		type: 'string',
		default: 'https://firecrawl.dev',
		description: 'The URL of the website to map',
		routing: {
			request: {
				body: {
					url: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Map A Website And Get Urls'],
			},
		},
	},
	{
		displayName: 'Search',
		name: 'search',
		type: 'string',
		default: 'docs',
		description: 'Search term to filter specific URLs',
		routing: {
			request: {
				body: {
					search: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Map A Website And Get Urls'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '{\n  "url": "https://firecrawl.dev",\n  "search": "docs"\n}',
		description: 'Custom body to send',
		routing: {
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				'/options.useCustomBody': [true],
				resource: ['Default'],
				operation: ['Map A Website And Get Urls'],
			},
		},
	},
];
