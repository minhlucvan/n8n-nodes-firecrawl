import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
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
        operation: ['Submit A Crawl Job'],
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
    description: 'List of paths to exclude from the crawl.',
    placeholder: 'Add item',
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            name: 'Item',
            displayName: 'Item',
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
      'Allow crawling pages that are not direct descendants of the initial URL.',
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
        operation: ['Submit A Crawl Job'],
      },
    },
  },
  {
    displayName: 'Webhook',
    name: 'webhook',
    type: 'string',
    default: '',
    description: 'URL to send webhook events during the crawl process.',
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
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'multiOptions',
            default: [],
            description: 'Output format(s) for the scraped data.',
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
            displayName: 'formats',
          },
          {
            type: 'fixedCollection',
            default: {},
            options: [
              {
                name: 'items',
                displayName: 'Items',
                values: [
                  {
                    type: 'string',
                    default: '',
                    description: 'The schema for structured data extraction.',
                    name: 'schema',
                    displayName: 'schema',
                  },
                  {
                    type: 'string',
                    default: '',
                    description: 'The system prompt used for extraction.',
                    name: 'systemPrompt',
                    displayName: 'systemPrompt',
                  },
                  {
                    type: 'string',
                    default: '',
                    description: 'Extraction prompt without schema.',
                    name: 'prompt',
                    displayName: 'prompt',
                  },
                ],
              },
            ],
            name: 'extract',
            displayName: 'extract',
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
      show: {
        resource: ['Default'],
        operation: ['Submit A Crawl Job'],
      },
    },
  },
]
/* eslint-disable */
