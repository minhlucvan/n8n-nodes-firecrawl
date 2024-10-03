/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

/**
 * The following code was generated create-n8n-nodes tool.
 *
 * This file was automatically generated and should not be edited.
 *
 * If changes are required, please refer to the templates and scripts in the repository.
 * Repository: https://github.com/oneflow-vn/create-n8n-nodes
 */

import { INodeProperties } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

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
    description: 'The URL to scrape',
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
        operation: ['Scrape A Url And Get Its Content'],
      },
    },
  },
  {
    displayName: 'Formats',
    name: 'formats',
    type: 'multiOptions',
    default: [],
    description: 'Output format(s) for the scraped data',
    options: [
      {
        name: 'Markdown',
        value: 'markdown',
      },
      {
        name: 'Html',
        value: 'html',
      },
      {
        name: 'Extract',
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
      hide: {
        useCustomBody: [true],
      },
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
    description: undefined,
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
    routing: {
      request: {
        body: {
          extract: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
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
      'List of actions to interact with dynamic content before scraping',
    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Type',
            type: 'options',
            default: 'wait',
            options: [
              {
                name: 'Wait',
                value: 'wait',
              },
              {
                name: 'Click',
                value: 'click',
              },
              {
                name: 'Write',
                value: 'write',
              },
              {
                name: 'Press',
                value: 'press',
              },
              {
                name: 'Screenshot',
                value: 'screenshot',
              },
            ],
            name: 'type',
          },
          {
            displayName: 'Selector',
            type: 'string',
            default: '',
            description: 'The CSS selector for `click` and `write` actions',
            name: 'selector',
          },
          {
            displayName: 'Milliseconds',
            type: 'number',
            default: 0,
            description: 'Milliseconds to wait for `wait` action',
            name: 'milliseconds',
          },
          {
            displayName: 'Text',
            type: 'string',
            default: '',
            description: 'Text for `write` action',
            name: 'text',
          },
          {
            displayName: 'Key',
            type: 'string',
            default: '',
            description: 'Key for `press` action',
            name: 'key',
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
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Scrape A Url And Get Its Content'],
      },
    },
  },
]
