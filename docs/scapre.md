[Firecrawl Docs home page![light logo](https://mintlify.s3-us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3-us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Ctrl K

Search

Navigation

Features

Scrape

[Documentation](/introduction) [SDKs](/sdks/overview) [Learn](https://www.firecrawl.dev/blog/category/tutorials) [API Reference](/api-reference/introduction)

Firecrawl converts web pages into markdown, ideal for LLM applications.

- It manages complexities: proxies, caching, rate limits, js-blocked content
- Handles dynamic content: dynamic websites, js-rendered sites, PDFs, images
- Outputs clean markdown, structured data, screenshots or html.

For details, see the [Scrape Endpoint API Reference](https://docs.firecrawl.dev/api-reference/endpoint/scrape).

## [​](\#scraping-a-url-with-firecrawl)  Scraping a URL with Firecrawl

### [​](\#scrape-endpoint)  /scrape endpoint

Used to scrape a URL and get its content.

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

# Scrape a website:
scrape_result = app.scrape_url('firecrawl.dev', params={'formats': ['markdown', 'html']})
print(scrape_result)

```

For more details about the parameters, refer to the [API Reference](https://docs.firecrawl.dev/api-reference/endpoint/scrape).

### [​](\#response)  Response

SDKs will return the data object directly. cURL will return the payload exactly as shown below.

Copy

```json
{
  "success": true,
  "data" : {
    "markdown": "Launch Week I is here! [See our Day 2 Release 🚀](https://www.firecrawl.dev/blog/launch-week-i-day-2-doubled-rate-limits)[💥 Get 2 months free...",\
    "html": "<!DOCTYPE html><html lang=\"en\" class=\"light\" style=\"color-scheme: light;\"><body class=\"__variable_36bd41 __variable_d7dc5d font-inter ...",\
    "metadata": {\
      "title": "Home - Firecrawl",\
      "description": "Firecrawl crawls and converts any website into clean markdown.",\
      "language": "en",\
      "keywords": "Firecrawl,Markdown,Data,Mendable,Langchain",\
      "robots": "follow, index",\
      "ogTitle": "Firecrawl",\
      "ogDescription": "Turn any website into LLM-ready data.",\
      "ogUrl": "https://www.firecrawl.dev/",\
      "ogImage": "https://www.firecrawl.dev/og.png?123",\
      "ogLocaleAlternate": [],\
      "ogSiteName": "Firecrawl",\
      "sourceURL": "https://firecrawl.dev",\
      "statusCode": 200\
    }\
  }\
}\
\
```\
\
## [​](\#extract-structured-data)  Extract structured data\
\
### [​](\#scrape-with-extract-endpoint)  /scrape (with extract) endpoint\
\
Used to extract structured data from scraped pages.\
\
Python\
\
Node\
\
cURL\
\
Copy\
\
```python\
from firecrawl import FirecrawlApp\
from pydantic import BaseModel, Field\
\
# Initialize the FirecrawlApp with your API key\
app = FirecrawlApp(api_key='your_api_key')\
\
class ExtractSchema(BaseModel):\
    company_mission: str\
    supports_sso: bool\
    is_open_source: bool\
    is_in_yc: bool\
\
data = app.scrape_url('https://docs.firecrawl.dev/', {\
    'formats': ['extract'],\
    'extract': {\
        'schema': ExtractSchema.model_json_schema(),\
    }\
})\
print(data["extract"])\
\
```\
\
Output:\
\
JSON\
\
Copy\
\
```json\
{\
    "success": true,\
    "data": {\
      "extract": {\
        "company_mission": "Train a secure AI on your technical resources that answers customer and employee questions so your team doesn't have to",\
        "supports_sso": true,\
        "is_open_source": false,\
        "is_in_yc": true\
      },\
      "metadata": {\
        "title": "Mendable",\
        "description": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",\
        "robots": "follow, index",\
        "ogTitle": "Mendable",\
        "ogDescription": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",\
        "ogUrl": "https://docs.firecrawl.dev/",\
        "ogImage": "https://docs.firecrawl.dev/mendable_new_og1.png",\
        "ogLocaleAlternate": [],\
        "ogSiteName": "Mendable",\
        "sourceURL": "https://docs.firecrawl.dev/"\
      },\
    }\
}\
\
```\
\
### [​](\#extracting-without-schema-new)  Extracting without schema (New)\
\
You can now extract without a schema by just passing a `prompt` to the endpoint. The llm chooses the structure of the data.\
\
cURL\
\
Copy\
\
```bash\
curl -X POST https://api.firecrawl.dev/v1/scrape \\
    -H 'Content-Type: application/json' \\
    -H 'Authorization: Bearer YOUR_API_KEY' \\
    -d '{\
      "url": "https://docs.firecrawl.dev/",\
      "formats": ["extract"],\
      "extract": {\
        "prompt": "Extract the company mission from the page."\
      }\
    }'\
\
```\
\
Output:\
\
JSON\
\
Copy\
\
```json\
{\
    "success": true,\
    "data": {\
      "extract": {\
        "company_mission": "Train a secure AI on your technical resources that answers customer and employee questions so your team doesn't have to",\
      },\
      "metadata": {\
        "title": "Mendable",\
        "description": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",\
        "robots": "follow, index",\
        "ogTitle": "Mendable",\
        "ogDescription": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",\
        "ogUrl": "https://docs.firecrawl.dev/",\
        "ogImage": "https://docs.firecrawl.dev/mendable_new_og1.png",\
        "ogLocaleAlternate": [],\
        "ogSiteName": "Mendable",\
        "sourceURL": "https://docs.firecrawl.dev/"\
      },\
    }\
}\
\
```\
\
### [​](\#extract-object)  Extract object\
\
The `extract` object accepts the following parameters:\
\
- `schema`: The schema to use for the extraction.\
- `systemPrompt`: The system prompt to use for the extraction.\
- `prompt`: The prompt to use for the extraction without a schema.\
\
## [​](\#interacting-with-the-page-with-actions)  Interacting with the page with Actions\
\
Firecrawl allows you to perform various actions on a web page before scraping its content. This is particularly useful for interacting with dynamic content, navigating through pages, or accessing content that requires user interaction.\
\
Here is an example of how to use actions to navigate to google.com, search for Firecrawl, click on the first result, and take a screenshot.\
\
It is important to almost always use the `wait` action before/after executing other actions to give enough time for the page to load.\
\
### [​](\#example)  Example\
\
Python\
\
Node\
\
cURL\
\
Copy\
\
```python\
from firecrawl import FirecrawlApp\
\
app = FirecrawlApp(api_key="fc-YOUR_API_KEY")\
\
# Scrape a website:\
scrape_result = app.scrape_url('firecrawl.dev',\
    params={\
        'formats': ['markdown', 'html'],\
        'actions': [\
            {"type": "wait", "milliseconds": 2000},\
            {"type": "click", "selector": "textarea[title=\"Search\"]"},\
            {"type": "wait", "milliseconds": 2000},\
            {"type": "write", "text": "firecrawl"},\
            {"type": "wait", "milliseconds": 2000},\
            {"type": "press", "key": "ENTER"},\
            {"type": "wait", "milliseconds": 3000},\
            {"type": "click", "selector": "h3"},\
            {"type": "wait", "milliseconds": 3000},\
            {"type": "screenshot"}\
        ]\
    }\
)\
print(scrape_result)\
\
```\
\
### [​](\#output)  Output\
\
JSON\
\
Copy\
\
```json\
{\
  "success": true,\
  "data": {\
    "markdown": "Our first Launch Week is over! [See the recap 🚀](blog/firecrawl-launch-week-1-recap)...",\
    "actions": {\
      "screenshots": [\
        "https://alttmdsdujxrfnakrkyi.supabase.co/storage/v1/object/public/media/screenshot-75ef2d87-31e0-4349-a478-fb432a29e241.png"\
      ]\
    },\
    "metadata": {\
      "title": "Home - Firecrawl",\
      "description": "Firecrawl crawls and converts any website into clean markdown.",\
      "language": "en",\
      "keywords": "Firecrawl,Markdown,Data,Mendable,Langchain",\
      "robots": "follow, index",\
      "ogTitle": "Firecrawl",\
      "ogDescription": "Turn any website into LLM-ready data.",\
      "ogUrl": "https://www.firecrawl.dev/",\
      "ogImage": "https://www.firecrawl.dev/og.png?123",\
      "ogLocaleAlternate": [],\
      "ogSiteName": "Firecrawl",\
      "sourceURL": "http://google.com",\
      "statusCode": 200\
    }\
  }\
}\
\
```\
\
For more details about the actions parameters, refer to the [API Reference](https://docs.firecrawl.dev/api-reference/endpoint/scrape).\
\
[Advanced Scraping Guide](/advanced-scraping-guide) [Crawl](/features/crawl)\
\
On this page\
\
- [Scraping a URL with Firecrawl](#scraping-a-url-with-firecrawl)\
- [/scrape endpoint](#scrape-endpoint)\
- [Installation](#installation)\
- [Usage](#usage)\
- [Response](#response)\
- [Extract structured data](#extract-structured-data)\
- [/scrape (with extract) endpoint](#scrape-with-extract-endpoint)\
- [Extracting without schema (New)](#extracting-without-schema-new)\
- [Extract object](#extract-object)\
- [Interacting with the page with Actions](#interacting-with-the-page-with-actions)\
- [Example](#example)\
- [Output](#output)