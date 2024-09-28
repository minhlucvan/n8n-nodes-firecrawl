import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
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
        operation: ['Scrape A Url And Get Its Content'],
      },
    },
  },
  {
    displayName: 'Url',
    name: 'url',
    type: 'string',
    default: '',
    description: 'The URL to scrape.',
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
        operation: ['Scrape A Url And Get Its Content'],
      },
    },
  },
  {
    displayName: 'Formats',
    name: 'formats',
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
    routing: {
      request: {
        body: {
          formats: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Scrape A Url And Get Its Content'],
      },
    },
  },
  {
    displayName: 'Extract',
    name: 'extract',
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
    routing: {
      request: {
        body: {
          extract: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Scrape A Url And Get Its Content'],
        formats: ['extract'],
      },
    },
  },
  {
    displayName: 'Actions',
    name: 'actions',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description:
      'List of actions to interact with dynamic content before scraping.',
    placeholder: 'Add item',
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'options',
            default: 'wait',
            options: [
              {
                name: 'wait',
                value: 'wait',
              },
              {
                name: 'click',
                value: 'click',
              },
              {
                name: 'write',
                value: 'write',
              },
              {
                name: 'press',
                value: 'press',
              },
              {
                name: 'screenshot',
                value: 'screenshot',
              },
            ],
            name: 'type',
            displayName: 'type',
          },
          {
            type: 'string',
            default: '',
            description: 'The CSS selector for `click` and `write` actions.',
            name: 'selector',
            displayName: 'selector',
          },
          {
            type: 'number',
            default: 0,
            description: 'Milliseconds to wait for `wait` action.',
            name: 'milliseconds',
            displayName: 'milliseconds',
          },
          {
            type: 'string',
            default: '',
            description: 'Text for `write` action.',
            name: 'text',
            displayName: 'text',
          },
          {
            type: 'string',
            default: '',
            description: 'Key for `press` action.',
            name: 'key',
            displayName: 'key',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          actions: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Scrape A Url And Get Its Content'],
      },
    },
  },
]
/* eslint-disable */
