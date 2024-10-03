/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

/**
 * The following code was generated create-n8n-nodes tool.
 *
 * This file was automatically generated and should not be edited.
 *
 * If changes are required, please refer to the templates and scripts in the repository.
 * Repository: https://github.com/oneflow-vn/create-n8n-nodes
 */

import { INodePropertyOptions } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

import { properties as rawProperties } from './properties'
import { runHooks } from './hooks'

export const name = 'Submit A Crawl Job'

const rawOption: INodePropertyOptions = {
  name: 'Submit A Crawl Job',
  value: 'Submit A Crawl Job',
  action: 'Submit A Crawl Job',
  description: 'Submits a job to crawl a URL and all accessible subpages',
  routing: {
    request: {
      method: 'POST',
      url: '=/crawl',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
