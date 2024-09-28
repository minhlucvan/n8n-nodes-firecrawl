import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Check Crawl Job Status'

const rawOption: INodePropertyOptions = {
  name: 'Check Crawl Job Status',
  value: 'Check Crawl Job Status',
  action: 'Check Crawl Job Status',
  description: 'Check the status of a crawl job by its ID and retrieve the result',
  routing: {
    request: {
      method: 'GET',
      url: '=/crawl/{{$parameter["crawl_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
