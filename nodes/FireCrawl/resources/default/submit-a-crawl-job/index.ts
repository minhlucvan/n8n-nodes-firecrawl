import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Submit A Crawl Job'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Submit A Crawl Job',
  value: 'Submit A Crawl Job',
  action: 'Submit a crawl job',
  description: 'Submits a job to crawl a URL and all accessible subpages.',
  routing: {
    request: {
      method: 'POST',
      url: '=/crawl',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
