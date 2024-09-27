import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as submitACrawlJob from './submit-a-crawl-job'
import * as crawlUrlWithWebSocketMonitoring from './crawl-url-with-web-socket-monitoring'
import * as submitACrawlJobWithAWebhook from './submit-a-crawl-job-with-a-webhook'
import * as scrapeUrl from './scrape-url'
import * as mapUrl from './map-url'

const operations: INodePropertyOptions[] = [
  submitACrawlJob.option,
  crawlUrlWithWebSocketMonitoring.option,
  submitACrawlJobWithAWebhook.option,
  scrapeUrl.option,
  mapUrl.option,
]

export const name = 'FireCrawl'

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
  ...crawlUrlWithWebSocketMonitoring.properties,
  ...submitACrawlJobWithAWebhook.properties,
  ...scrapeUrl.properties,
  ...mapUrl.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
