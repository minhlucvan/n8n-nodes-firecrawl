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
		displayName: 'GET /crawl/{crawl_id}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Default'],
				operation: ['Check Crawl Job Status'],
			},
		},
	},
	{
		displayName: 'Crawl Id',
		name: 'crawl_id',
		required: true,
		description: 'The ID of the crawl job',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['Default'],
				operation: ['Check Crawl Job Status'],
			},
		},
	},
];
