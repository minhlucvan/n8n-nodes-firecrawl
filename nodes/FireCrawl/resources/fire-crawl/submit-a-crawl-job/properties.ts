import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /crawl',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Submit a crawl job'],
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
        operation: ['Submit a crawl job'],
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
        operation: ['Submit a crawl job'],
      },
    },
  },
  {
    displayName: 'Allow Backward Links',
    name: 'allowBackwardLinks',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          allowBackwardLinks: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Submit a crawl job'],
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
        operation: ['Submit a crawl job'],
      },
    },
  },
]
