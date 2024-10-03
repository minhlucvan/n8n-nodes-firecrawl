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

import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import { runHooks } from './hooks'

import * as submitACrawlJob from './submit-a-crawl-job'
import * as checkCrawlJobStatus from './check-crawl-job-status'
import * as crawlUrlWithWebsocketMonitoring from './crawl-url-with-websocket-monitoring'
import * as submitACrawlJobWithAWebhook from './submit-a-crawl-job-with-a-webhook'
import * as scrapeAUrlAndGetItsContent from './scrape-a-url-and-get-its-content'
import * as mapAWebsiteAndGetUrls from './map-a-website-and-get-urls'

const operations: INodePropertyOptions[] = [
  submitACrawlJob.option,
  checkCrawlJobStatus.option,
  crawlUrlWithWebsocketMonitoring.option,
  submitACrawlJobWithAWebhook.option,
  scrapeAUrlAndGetItsContent.option,
  mapAWebsiteAndGetUrls.option,
]

export const name = 'Default'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Default'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...submitACrawlJob.properties,
  ...checkCrawlJobStatus.properties,
  ...crawlUrlWithWebsocketMonitoring.properties,
  ...submitACrawlJobWithAWebhook.properties,
  ...scrapeAUrlAndGetItsContent.properties,
  ...mapAWebsiteAndGetUrls.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
