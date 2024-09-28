import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /crawl/{crawl_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Check Crawl Job Status'],
      },
    },
  },
  {
    displayName: 'Crawl Id',
    name: 'crawl_id',
    required: true,
    description: 'The ID of the crawl job.',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Check Crawl Job Status'],
      },
    },
  },
]
/* eslint-disable */
