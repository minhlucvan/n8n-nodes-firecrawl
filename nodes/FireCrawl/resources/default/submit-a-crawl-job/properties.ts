/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodeProperties } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

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
        operation: ['Submit A Crawl Job'],
      },
    },
  },
  {
    displayName: 'Url',
    required: true,
    name: 'url',
    type: 'string',
    default: '',
    description: 'The URL to crawl',
    routing: {
      request: {
        body: {
          url: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Submit A Crawl Job'],
      },
    },
  },
  {
    displayName: 'Limit',
    name: 'limit',
    type: 'number',
    default: 0,
    description: 'Limit the number of pages to crawl',
    routing: {
      request: {
        body: {
          limit: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Submit A Crawl Job'],
      },
    },
  },
  {
    displayName: 'Exclude Paths',
    name: 'excludePaths',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: 'List of paths to exclude from the crawl',
    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Item',
            name: 'Item',
            type: 'string',
            default: '',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          excludePaths: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Submit A Crawl Job'],
      },
    },
  },
  {
    displayName: 'Allow Backward Links',
    name: 'allowBackwardLinks',
    type: 'boolean',
    default: true,
    description:
      'Allow crawling pages that are not direct descendants of the initial URL',
    routing: {
      request: {
        body: {
          allowBackwardLinks: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Submit A Crawl Job'],
      },
    },
  },
  {
    displayName: 'Webhook',
    name: 'webhook',
    type: 'string',
    default: '',
    description: 'URL to send webhook events during the crawl process',
    routing: {
      request: {
        body: {
          webhook: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Submit A Crawl Job'],
      },
    },
  },
  {
    displayName: 'Scrape Options',
    name: 'scrapeOptions',
    type: 'fixedCollection',
    default: {},
    description: 'Scraping options',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Formats',
            type: 'multiOptions',
            default: [],
            description: 'Output format(s) for the scraped data',
            options: [
              {
                name: 'markdown',
                value: 'markdown',
              },
              {
                name: 'html',
                value: 'html',
              },
              {
                name: 'extract',
                value: 'extract',
              },
            ],
            name: 'formats',
          },
          {
            displayName: 'Extract',
            type: 'fixedCollection',
            default: {},
            description: '',
            options: [
              {
                displayName: 'Items',
                name: 'items',
                values: [
                  {
                    displayName: 'Schema',
                    type: 'string',
                    default: '',
                    description: 'The schema for structured data extraction',
                    name: 'schema',
                  },
                  {
                    displayName: 'Systemprompt',
                    type: 'string',
                    default: '',
                    description: 'The system prompt used for extraction',
                    name: 'systemPrompt',
                  },
                  {
                    displayName: 'Prompt',
                    type: 'string',
                    default: '',
                    description: 'Extraction prompt without schema',
                    name: 'prompt',
                  },
                ],
              },
            ],
            name: 'extract',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          scrapeOptions: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Submit A Crawl Job'],
      },
    },
  },
]
