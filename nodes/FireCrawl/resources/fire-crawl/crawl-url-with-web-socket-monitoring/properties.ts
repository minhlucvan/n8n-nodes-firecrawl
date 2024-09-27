import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /crawl/websocket',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Crawl URL with WebSocket Monitoring'],
      },
    },
  },
  {
    displayName: 'Url',
    name: 'url',
    type: 'string',
    default: '',
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
        operation: ['Crawl URL with WebSocket Monitoring'],
      },
    },
  },
  {
    displayName: 'Exclude Paths',
    name: 'excludePaths',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          excludePaths: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Crawl URL with WebSocket Monitoring'],
      },
    },
  },
  {
    displayName: 'Limit',
    name: 'limit',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          limit: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Crawl URL with WebSocket Monitoring'],
      },
    },
  },
]
