import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'mapUrl'

const rawOption: INodePropertyOptions = {
  name: 'mapUrl',
  value: 'mapUrl',
  action: 'Map a website and get URLs',
  routing: {
    request: {
      method: 'POST',
      url: '=/map',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
