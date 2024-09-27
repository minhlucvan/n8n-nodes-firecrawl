import { INodeProperties } from 'n8n-workflow'
import { aggregateNodeMethods } from '../helpers/methods'
import runHooks from './hooks'

import * as fireCrawl from './fire-crawl'

const authenticationProperties: INodeProperties[] = []

const resourceSelect: INodeProperties[] = [
  {
    displayName: 'Resource',
    name: 'resource',
    type: 'hidden',
    noDataExpression: true,
    options: [
      {
        name: 'FireCrawl',
        value: 'Default',
      },
    ],
    default: '',
  },
]

const rawProperties: INodeProperties[] = [
  ...authenticationProperties,
  ...resourceSelect,
  ...fireCrawl.properties,
]

const { properties, methods: selfMethods } = runHooks(rawProperties)

const methods = aggregateNodeMethods([selfMethods, fireCrawl.methods])

export { properties, methods }
