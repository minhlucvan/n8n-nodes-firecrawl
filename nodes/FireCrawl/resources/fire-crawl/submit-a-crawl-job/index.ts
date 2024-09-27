import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Submit a crawl job'

const rawOption: INodePropertyOptions = {
  name: 'Submit a crawl job',
  value: 'Submit a crawl job',
  action: 'Submit a crawl job',
  routing: {
    request: {
      method: 'POST',
      url: '=/crawl',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
