/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodePropertyOptions } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

import { properties as rawProperties } from './properties'
import { runHooks } from './hooks'

export const name = 'Check Crawl Job Status'

const rawOption: INodePropertyOptions = {
  name: 'Check Crawl Job Status',
  value: 'Check Crawl Job Status',
  action: 'Check Crawl Job Status Default',
  description:
    'Check the status of a crawl job by its ID and retrieve the result',
  routing: {
    request: {
      method: 'GET',
      url: '=/crawl/{{$parameter["crawl_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }