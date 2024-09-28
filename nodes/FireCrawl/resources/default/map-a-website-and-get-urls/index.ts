import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Map A Website And Get Urls'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Map A Website And Get Urls',
  value: 'Map A Website And Get Urls',
  action: 'Map a website and get URLs',
  description:
    'Map a URL and retrieve most links present on the website. Optionally, use the `search` parameter to filter URLs by a specific keyword.',
  routing: {
    request: {
      method: 'POST',
      url: '=/map',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
