import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /map',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Map A Website And Get Urls'],
      },
    },
  },
  {
    displayName: 'Url',
    name: 'url',
    type: 'string',
    default: 'https://firecrawl.dev',
    description: 'The URL of the website to map.',
    routing: {
      request: {
        body: {
          url: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Map A Website And Get Urls'],
      },
    },
  },
  {
    displayName: 'Search',
    name: 'search',
    type: 'string',
    default: 'docs',
    description: 'Search term to filter specific URLs.',
    routing: {
      request: {
        body: {
          search: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Map A Website And Get Urls'],
      },
    },
  },
]
/* eslint-disable */
