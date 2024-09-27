import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'scrapeUrl'

const rawOption: INodePropertyOptions = {
  name: 'scrapeUrl',
  value: 'scrapeUrl',
  action: 'Scrape a URL and get its content.',
  routing: {
    request: {
      method: 'POST',
      url: '=/scrape',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
