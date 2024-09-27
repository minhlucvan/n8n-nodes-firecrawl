const path = require('path');

module.exports = {
  packageName: 'n8n-nodes-firecrawl',
  credentials: {
    FireCrawlApi: {
      displayName: 'FireCrawl API',
      name: 'fireCrawlApi',
      className: 'FireCrawlApi',
      scheme: 'apiKey',
    }
  },
  nodes: {
    firecrawl: {
      displayName: 'FireCrawl',
      name: 'FireCrawl',
      description: 'FireCrawl API',
      openapi: path.resolve(__dirname, 'openapi.yml'),
      icon: './icons/firewrawl.png',
      baseUrl: '=\{\{$credentials.baseUrl\}\}',
      credentials: [{
        displayName: 'FireCrawl API',
        name: 'fireCrawlApi',
        required: true,
      }],
    },
  },
  overwrites: {
    operations: [],
  },
};

