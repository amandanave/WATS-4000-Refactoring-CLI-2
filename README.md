# WATS 4000: Refactoring

> Practice refactoring a Vue.js project.

This project provides resources to practice refactoring. It is designed to go
along with the [Practical JavaScript 2: Application Architecture section](https://shawnr.gitbooks.io/practical-javascript-2-building-applications/application-architecture/). To
successfully complete this project, we will need to improve the structure and
organization of the code without altering the functionality of the application.

This starter repository contains a simple weather application. The weather app
uses three major views: City Search, Current Weather, and 5 Day Forecast. Users
can search for their city and then view weather data. The weather data is
requested from the [OpenWeatherMap.org API](https://openweathermap.org/), which
is free and available for any developer to use. (**NOTE:** You will need to
sign up to get an OpenWeatherMap.org API Key to complete this project.)

In the initial state, this application will work (once you insert your API key
into the proper locations), but the structure of the application could be
significantly improved. We will practice creating child components that can
accept data from the parent component, abstract base API configurations away
from each individual API call, and consolidate other HTML and CSS blocks to
minimize the pain of maintenance.

Before you get started on the project, be sure to review the files and the way
the application works. Remember that the goal is **not** to alter or enhance the
features of this application. Rather, we want to improve the structure and
organization of the code to make it easier to maintain and continue to enhance
the application in the future.

## Basic Requirements

* Create a software architecture diagram for the system as it exists:
  * Show each component used in the application.
  * Indicate relationships between components.
* Sign up to [OpenWeatherMap.org](https://openweathermap.org/) and generate an API Key.
* Paste your API Key (which will be used as the `APPID` parameter) into the appropriate locations in the `CitySearch.vue`, `CurrentWeather.vue`, and `Forecast.vue` files.
* Verify the site works with your key. You should be able to search for a city and see weather data.
* Abstract the base configuration for the API requests to a common file to reduce duplication of the base URL and `APPID`.
* Create child components that can accept weather information and produce a well-formatted display.
* Use the child components in each of the views to eliminate the redundant HTML and CSS styles used.
* Create a child component called `ErrorList` to handle display of error messages. Replace the error message handling in the templates of the three parent components with this child component.
* Clean up any extraneous code, comments, or files that are unused.
* Add comments where they would be helpful to improve the readability of the project.
* Create a software architecture diagram for the software with revisions:
  * Show each component used in the application.
  * Indicate relationships between components.

## Stretch Goals
If you crave an extra challenge, attempt these stretch goals:

* Abstract the addition of the `&deg; F` formatting on temperatures to a filter used in a common file.
* Abstract the `formatDate` filter to a common file.
* Create a child component to provide navigation between city search, current weather, and forecast views. Implement this component on each URL.

## Build Setup

Fork and clone this repository, then follow these steps to get up and running.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

This project uses the [OpenWeatherMap.org API](https://openweathermap.org/).
