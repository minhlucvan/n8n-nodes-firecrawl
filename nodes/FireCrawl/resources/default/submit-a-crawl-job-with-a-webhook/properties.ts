import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
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
        operation: ['Submit A Crawl Job With A Webhook'],
      },
    },
  },
  {
    required: true,
    displayName: 'Url',
    name: 'url',
    type: 'string',
    default: '',
    description: 'The URL to crawl.',
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
        operation: ['Submit A Crawl Job With A Webhook'],
      },
    },
  },
  {
    displayName: 'Limit',
    name: 'limit',
    type: 'number',
    default: 0,
    description: 'Limit the number of pages to crawl.',
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
        operation: ['Submit A Crawl Job With A Webhook'],
      },
    },
  },
  {
    displayName: 'Webhook',
    name: 'webhook',
    type: 'string',
    default: '',
    description: 'URL to send webhook events to.',
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
        operation: ['Submit A Crawl Job With A Webhook'],
      },
    },
  },
]
/* eslint-disable */
