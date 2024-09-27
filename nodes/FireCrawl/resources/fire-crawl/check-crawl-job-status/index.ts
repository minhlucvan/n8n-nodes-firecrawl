import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Check Crawl Job Status'

const rawOption: INodePropertyOptions = {
  name: 'Check Crawl Job Status',
  value: 'Check Crawl Job Status',
  action: 'Check Crawl Job Status',
  routing: {
    request: {
      method: 'GET',
      url: '=/crawl/{{$parameter["crawl_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
