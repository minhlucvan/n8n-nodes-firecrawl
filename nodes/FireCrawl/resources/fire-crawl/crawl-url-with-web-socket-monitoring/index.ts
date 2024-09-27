import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Crawl URL with WebSocket Monitoring'

const rawOption: INodePropertyOptions = {
  name: 'Crawl URL with WebSocket Monitoring',
  value: 'Crawl URL with WebSocket Monitoring',
  action: 'Crawl URL with WebSocket Monitoring',
  routing: {
    request: {
      method: 'POST',
      url: '=/crawl/websocket',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
