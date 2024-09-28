import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

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

/* eslint-disable */
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
/* eslint-disable */

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
