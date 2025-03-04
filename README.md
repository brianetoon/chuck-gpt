# SBA 320 - React Web Application Project

## Project Summary

The purpose of this project is to demonstrate understanding of React by building an application that utilizes data from an external source. To accomplish this, I created "Chuck GPT" which utilizes the [Chuck Norris Jokes API](https://api.chucknorris.io/). The application has a Chat-GPT like user interface that allows users to "chat" by selecting joke topics and recieving a joke from the API.

## Requirements

- Built with React
- Utilizes at least one of Redux Toolkit, Zustand, useContext or useReducer
- Uses AJAX to make a request to an external data source and output some of the data retrieved into the DOM
- Deploy on Netlify

## Application Details

Chuck GPT is a React application that utilizes data from the [Chuck Norris Jokes API](https://api.chucknorris.io/). Users can "chat" by selecting a joke topic from a dropdown menu that is populated with category options retrieved from the API. Once a user selects a topic, a user message appears in the chat window followed by a bot message that is a Chuck Norris joke. The application uses Zustand for state management, ensuring that the selected category and chat history persist across navigation.

## Future Improvements

- Allow users to "favorite" and "unfavorite" jokes and view them on a separate page.
- Allow users to remove jokes from the chat.
- Create more dynamic "user messages".
- Issue warning about the explicit nature of some of the Chuck Norris jokes.
- About page with some information about the application.

## Deliverables

- Live Project on Netlify: https://chuck-gpt.netlify.app
- GitHub Repository: https://github.com/brianetoon/chuck-gpt
