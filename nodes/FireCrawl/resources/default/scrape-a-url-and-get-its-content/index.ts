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

export const name = 'Scrape A Url And Get Its Content'

const rawOption: INodePropertyOptions = {
  name: 'Scrape A Url And Get Its Content',
  value: 'Scrape A Url And Get Its Content',
  action: 'Scrape A Url And Get Its Content Default',
  description:
    'Scrape a given URL to retrieve content in markdown, HTML, or other formats. This endpoint supports structured data extraction and dynamic actions.',
  routing: {
    request: {
      method: 'POST',
      url: '=/scrape',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }