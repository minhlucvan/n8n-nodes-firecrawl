/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Crawl Url With Websocket Monitoring';

const rawOption: INodePropertyOptions = {
	name: 'Crawl Url With Websocket Monitoring',
	value: 'Crawl Url With Websocket Monitoring',
	action: 'Crawl URL with WebSocket Monitoring',
	description: 'Initiate a crawl and monitor progress in real-time using WebSocket',
	routing: {
		request: {
			method: 'POST',
			url: '=/crawl/websocket',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
