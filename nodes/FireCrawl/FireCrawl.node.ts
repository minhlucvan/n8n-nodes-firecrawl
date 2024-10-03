import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './FireCrawl.properties'
import { methods } from './FireCrawl.methods'

export class FireCrawl implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'FireCrawl',
    name: 'fireCrawl',
    icon: 'file:firecrawl.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'FireCrawl API',
    defaults: {
      name: 'FireCrawl',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        displayName: 'FireCrawl API',
        name: 'fireCrawlApi',
        required: true,
      },
    ],

    requestDefaults: {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      baseURL: '={{$credentials.baseUrl}}',
    },

    properties,
  }

  methods = methods
}
