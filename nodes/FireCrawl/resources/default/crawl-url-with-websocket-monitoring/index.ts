import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Crawl Url With Websocket Monitoring'

const rawOption: INodePropertyOptions = {
  name: 'Crawl Url With Websocket Monitoring',
  value: 'Crawl Url With Websocket Monitoring',
  action: 'Crawl URL with WebSocket Monitoring',
  description: 'Initiate a crawl and monitor progress in real-time using WebSocket',
  routing: {
    request: {
      method: 'POST',
      url: '=/crawl/websocket',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
