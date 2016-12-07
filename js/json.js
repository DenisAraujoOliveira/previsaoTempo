

select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="saopaulo")


{
 "query": {
  "count": 1,
  "created": "2016-12-01T14:37:21Z",
  "lang": "pt-BR",
  "results": {
   "channel": {
    "units": {
     "distance": "mi",
     "pressure": "in",
     "speed": "mph",
     "temperature": "F"
    },
    "title": "Yahoo! Weather - Sao Paulo, SP, BR",
    "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-455827/",
    "description": "Yahoo! Weather for Sao Paulo, SP, BR",
    "language": "en-us",
    "lastBuildDate": "Thu, 01 Dec 2016 12:37 PM BRST",
    "ttl": "60",
    "location": {
     "city": "Sao Paulo",
     "country": "Brazil",
     "region": " SP"
    },
    "wind": {
     "chill": "66",
     "direction": "113",
     "speed": "18"
    },
    "atmosphere": {
     "humidity": "80",
     "pressure": "932.0",
     "rising": "0",
     "visibility": "16.1"
    },
    "astronomy": {
     "sunrise": "6:11 am",
     "sunset": "7:41 pm"
    },
    "image": {
     "title": "Yahoo! Weather",
     "width": "142",
     "height": "18",
     "link": "http://weather.yahoo.com",
     "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
    },
    "item": {
     "title": "Conditions for Sao Paulo, SP, BR at 12:00 PM BRST",
     "lat": "-23.57538",
     "long": "-46.615639",
     "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-455827/",
     "pubDate": "Thu, 01 Dec 2016 12:00 PM BRST",
     "condition": {
      "code": "26",
      "date": "Thu, 01 Dec 2016 12:00 PM BRST",
      "temp": "66",
      "text": "Cloudy"
     },
     "forecast": [
      {
       "code": "26",
       "date": "01 Dec 2016",
       "day": "Thu",
       "high": "68",
       "low": "58",
       "text": "Cloudy"
      },
      {
       "code": "28",
       "date": "02 Dec 2016",
       "day": "Fri",
       "high": "75",
       "low": "59",
       "text": "Mostly Cloudy"
      },
      {
       "code": "47",
       "date": "03 Dec 2016",
       "day": "Sat",
       "high": "78",
       "low": "63",
       "text": "Scattered Thunderstorms"
      },
      {
       "code": "47",
       "date": "04 Dec 2016",
       "day": "Sun",
       "high": "69",
       "low": "61",
       "text": "Scattered Thunderstorms"
      },
      {
       "code": "30",
       "date": "05 Dec 2016",
       "day": "Mon",
       "high": "70",
       "low": "57",
       "text": "Partly Cloudy"
      },
      {
       "code": "30",
       "date": "06 Dec 2016",
       "day": "Tue",
       "high": "80",
       "low": "55",
       "text": "Partly Cloudy"
      },
      {
       "code": "47",
       "date": "07 Dec 2016",
       "day": "Wed",
       "high": "81",
       "low": "61",
       "text": "Scattered Thunderstorms"
      },
      {
       "code": "47",
       "date": "08 Dec 2016",
       "day": "Thu",
       "high": "71",
       "low": "65",
       "text": "Scattered Thunderstorms"
      },
      {
       "code": "26",
       "date": "09 Dec 2016",
       "day": "Fri",
       "high": "69",
       "low": "65",
       "text": "Cloudy"
      },
      {
       "code": "28",
       "date": "10 Dec 2016",
       "day": "Sat",
       "high": "72",
       "low": "61",
       "text": "Mostly Cloudy"
      }
     ],
     "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/26.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Cloudy. High: 68Low: 58\n<BR /> Fri - Mostly Cloudy. High: 75Low: 59\n<BR /> Sat - Scattered Thunderstorms. High: 78Low: 63\n<BR /> Sun - Scattered Thunderstorms. High: 69Low: 61\n<BR /> Mon - Partly Cloudy. High: 70Low: 57\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-455827/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)\n<BR />\n]]>",
     "guid": {
      "isPermaLink": "false"
     }
    }
   }
  }
 }
}
