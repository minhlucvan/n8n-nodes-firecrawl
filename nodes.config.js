const path = require('path');

module.exports = {
  packageName: 'n8n-nodes-firecrawl',
  credentials: {
    FireCrawlApi: {
      displayName: 'FireCrawl API',
      name: 'fireCrawlApi',
      className: 'FireCrawlApi',
      scheme: 'apiKey',
    },
  },
  nodes: {
    firecrawl: {
      displayName: 'FireCrawl',
      name: 'FireCrawl',
      description: 'FireCrawl API',
      openapi: path.resolve(__dirname, 'openapi.yml'),
      icon: './icons/firecrawl.svg',
      baseUrl: '={{$credentials.baseUrl}}',
      credentials: [
        {
          displayName: 'FireCrawl API',
          name: 'fireCrawlApi',
          required: true,
        },
      ],
    },
  },
  overwrites: {
    operations: [
      {
        match: {
          name: 'extract',
          displayOptions: {
            show: {
              resource: ['Default'],
              operation: ['Scrape A Url And Get Its Content'],
            },
          },
        },
        set: {
          displayOptions: {
            show: {
              resource: ['Default'],
              operation: ['Scrape A Url And Get Its Content'],
              // display only when formats include 'extract'
              formats: ['extract'],
            },
          },
        },
      },
      {
        match: {
          type: 'boolean',
        },
        set: function (operation) {
          if (!operation.description || !operation.description.startsWith('Whether`')) {
            return operation;
          }
          operation.description = `Whether to ${operation.description}`;

          return operation;
        }
      }
    ],
  },
  normalizeActionFn: (_, opName) => {
    // /a /b => /b
    return opName;
  }
};
