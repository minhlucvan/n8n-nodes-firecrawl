import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Submit A Crawl Job With A Webhook'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Submit A Crawl Job With A Webhook',
  value: 'Submit A Crawl Job With A Webhook',
  action: 'Submit a crawl job with a webhook',
  description:
    'Submits a job to crawl a URL and sends webhook events during the crawl process.',
  routing: {
    request: {
      method: 'POST',
      url: '=/crawl/webhook',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
