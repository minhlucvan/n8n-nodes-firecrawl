/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodeProperties } from 'n8n-workflow';
import { aggregateNodeMethods } from '../helpers/methods';
import runHooks from './hooks';

import * as defaultResource from './default';

const authenticationProperties: INodeProperties[] = [];

const resourceSelect: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'hidden',
		noDataExpression: true,
		options: [
			{
				name: 'Default',
				value: 'Default',
			},
		],
		default: '',
	},
];

const extraProperties: INodeProperties[] = [
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add option',
		default: {},
		options: [
			{
				displayName: 'Use Custom Body',
				name: 'useCustomBody',
				type: 'boolean',
				description: 'Whether to use a custom body',
				default: false,
			},
		],
	},
];

const rawProperties: INodeProperties[] = [
	...authenticationProperties,
	...resourceSelect,
	...defaultResource.properties,
	...extraProperties,
];

const { properties, methods: selfMethods } = runHooks(rawProperties);

const methods = aggregateNodeMethods([selfMethods, defaultResource.methods]);

export { properties, methods };
