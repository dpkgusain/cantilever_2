# News App

This is a news application built using the NewsAPI. The API was chosen because it features a developer mode which allows free access to the news API, allowing up to 100 requests in a 24-hour period.

## Getting Started

To start the project, install the necessary dependencies by running `npm i` in your terminal. After the installation is complete, you can start the application by running `npm start`.

## Setup

To run this project, you need to add your own NewsAPI key:

1. Generate your own API key by making your account from [NewsAPI](https://newsapi.org/).
2. Create a `.env.local` file in the root directory of the project.
3. Add the following line to the file, replacing `Your_API_KEY` with your actual API key:

```shellscript
REACT_APP_NEWS_API="Your_API_KEY"

## Unique Features

The application has several unique features:

1. **Wide Range of Categories**: The application features a wide range of categories from which users can choose to read their news from.

2. **Search Functionality**: A fully functional search option is available which allows users to search for the news they like. The search functionality was implemented using the Context API.

3. **Infinite Scrolling**: The application features the option for infinite scrolling to enhance the UI/UX.