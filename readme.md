### Express Google trends

## Requirements
* node >= 6.4.0



---

install

```
npm i

```

run server with

```
npm run start

```

More usage informations on
* https://www.npmjs.com/package/google-trends-api


Example usage

POST
```
{
	"options": {
		"keyword"   :"christmas",
		"startTime" : "2010-01-01T00:00:00.000Z"
	}
}
```

API ressources

* POST /autoComplete

Usage
```
{
  keyword: 'Back to School'
}
```
* POST /autoComplete

Usage
```
{
  keyword: 'Back to School'
}
```
* POST /dailyTrends

```
{
  geo: //optional, string or array, Ex ['US-CA-800'],
  hl : //optional, string, language code, defaults to english.
  timezone : //optional, number defaults to the time zone difference, in minutes, from UTC to current locale (host system settings),
  trendDate: //optional, Date (max 15 days in the past)
}
```

* POST /interestOverTime

```
{
  keyword: //required string,
  startTime: //optional Date,
  endTime: //optional Date,
  hl : //optional language code default to english
  timezone : /optional number (defaults to the time zone difference, in minutes, from UTC to current locale (host system settings)
  category : /optional number category list [category lists](https://github.com/pat310/google-trends-api/wiki/Google-Trends-Categories) (defaults to all categories)
  geo: //optional, string or array, Ex ['US-CA-800'],
  granularTimeResolution : //optional boolean if true finer time resolution, relevant with startTime, endTime
}
```

* POST /interestByRegion

```
{
  keyword: //required string,
  startTime: //optional Date,
  endTime: //optional Date,
  geo: //optional, string or array, Ex ['US-CA-800'],
  resolution: //optional ["COUNTRY", "REGION", "CITY", "DMA"]
  hl : //optional language code default to english
  timezone : /optional number (defaults to the time zone difference, in minutes, from UTC to current locale (host system settings)
  category : /optional number category list [category lists](https://github.com/pat310/google-trends-api/wiki/Google-Trends-Categories) (defaults to all categories)
}
```

* POST /relatedQueries

```
{
  keyword: //required string,
  startTime: //optional Date,
  endTime: //optional Date,
  geo: //optional, string or array, Ex ['US-CA-800'],
  resolution: //optional ["COUNTRY", "REGION", "CITY", "DMA"]
  hl : //optional language code default to english
  timezone : /optional number (defaults to the time zone difference, in minutes, from UTC to current locale (host system settings)
  category : /optional number category list [category lists](https://github.com/pat310/google-trends-api/wiki/Google-Trends-Categories) (defaults to all categories)
}
```
