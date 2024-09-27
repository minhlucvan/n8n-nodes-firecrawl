import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /scrape',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['scrapeUrl'],
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
        operation: ['scrapeUrl'],
      },
    },
  },
  {
    displayName: 'Formats',
    name: 'formats',
    type: 'multiOptions',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          formats: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['scrapeUrl'],
      },
    },
    options: [],
  },
  {
    displayName: 'Extract',
    name: 'extract',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          extract: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['scrapeUrl'],
      },
    },
  },
  {
    displayName: 'Actions',
    name: 'actions',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          actions: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['scrapeUrl'],
      },
    },
  },
]
