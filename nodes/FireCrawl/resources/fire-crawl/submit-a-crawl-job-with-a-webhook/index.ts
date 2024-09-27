import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Submit a crawl job with a webhook'

const rawOption: INodePropertyOptions = {
  name: 'Submit a crawl job with a webhook',
  value: 'Submit a crawl job with a webhook',
  action: 'Submit a crawl job with a webhook',
  routing: {
    request: {
      method: 'POST',
      url: '=/crawl/webhook',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
