import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Scrape A Url And Get Its Content'

const rawOption: INodePropertyOptions = {
  name: 'Scrape A Url And Get Its Content',
  value: 'Scrape A Url And Get Its Content',
  action: 'Scrape a URL and get its content.',
  description: 'Scrape a given URL to retrieve content in markdown, HTML, or other formats. This endpoint supports structured data extraction and dynamic actions.',
  routing: {
    request: {
      method: 'POST',
      url: '=/scrape',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
