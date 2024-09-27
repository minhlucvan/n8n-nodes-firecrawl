[Firecrawl Docs home page![light logo](https://mintlify.s3-us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3-us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Ctrl K

Search

Navigation

Features

Map

[Documentation](/introduction) [SDKs](/sdks/overview) [Learn](https://www.firecrawl.dev/blog/category/tutorials) [API Reference](/api-reference/introduction)

## [​](\#introducing-map-alpha)  Introducing /map (Alpha)

The easiest way to go from a single url to a map of the entire website. This is extremely useful for:

- When you need to prompt the end-user to choose which links to scrape
- Need to quickly know the links on a website
- Need to scrape pages of a website that are related to a specific topic (use the `search` parameter)
- Only need to scrape specific pages of a website

## [​](\#alpha-considerations)  Alpha Considerations

This endpoint prioritizes speed, so it may not capture all website links. We are working on improvements. Feedback and suggestions are very welcome.

## [​](\#mapping)  Mapping

### [​](\#map-endpoint)  /map endpoint

Used to map a URL and get urls of the website. This returns most links present on the website.

### [​](\#installation)  Installation

Python

Node

Go

Rust

Copy

```bash
pip install firecrawl-py

```

### [​](\#usage)  Usage

Python

Node

Go

Rust

cURL

Copy

```python
from firecrawl import FirecrawlApp

app = FirecrawlApp(api_key="fc-YOUR_API_KEY")

# Map a website:
map_result = app.map_url('https://firecrawl.dev')
print(map_result)

```

### [​](\#response)  Response

SDKs will return the data object directly. cURL will return the payload exactly as shown below.

Copy

```json
{
  "status": "success",
  "links": [\
    "https://firecrawl.dev",\
    "https://www.firecrawl.dev/pricing",\
    "https://www.firecrawl.dev/blog",\
    "https://www.firecrawl.dev/playground",\
    "https://www.firecrawl.dev/smart-crawl",\
    ...\
  ]
}

```

#### [​](\#map-with-search)  Map with search

Map with `search` param allows you to search for specific urls inside a website.

cURL

Copy

```bash
curl -X POST https://api.firecrawl.dev/v1/map \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer YOUR_API_KEY' \
    -d '{
      "url": "https://firecrawl.dev",
      "search": "docs"
    }'

```

Response will be an ordered list from the most relevant to the least relevant.

Copy

```json
{
  "status": "success",
  "links": [\
    "https://docs.firecrawl.dev",\
    "https://docs.firecrawl.dev/sdks/python",\
    "https://docs.firecrawl.dev/learn/rag-llama3",\
  ]
}

```

[Crawl](/features/crawl) [LLM Extract](/features/extract)

On this page

- [Introducing /map (Alpha)](#introducing-map-alpha)
- [Alpha Considerations](#alpha-considerations)
- [Mapping](#mapping)
- [/map endpoint](#map-endpoint)
- [Installation](#installation)
- [Usage](#usage)
- [Response](#response)
- [Map with search](#map-with-search)