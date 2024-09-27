import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /crawl/webhook',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Submit a crawl job with a webhook'],
      },
    },
  },
  {
    required: true,
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
        operation: ['Submit a crawl job with a webhook'],
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
        operation: ['Submit a crawl job with a webhook'],
      },
    },
  },
  {
    displayName: 'Webhook',
    name: 'webhook',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          webhook: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Submit a crawl job with a webhook'],
      },
    },
  },
]
