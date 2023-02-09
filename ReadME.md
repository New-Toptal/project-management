<h1 align="center">A simplified Jira clone built with React and Node</h1>

![App screenshot](https://i.ibb.co/W3qVvCn/jira-optimized.jpg)

## What is this and who is it for 🤷‍♀️

I do React consulting and this is a showcase product I've built in my spare time. It's a very good example of modern, real-world React codebase.

There are many showcase/example React projects out there but most of them are way too simple. I like to think that this codebase contains enough complexity to offer valuable insights to React developers of all skill levels while still being _relatively_ easy to understand.

It is not fully completed as a project management system, but the basic functions are implemented, so there wouldn't be big problems using this project. But if you want to add some more functions you can add to it's codebase.

## Features

- Implement "Create issue" function
  - Select Issue Type
  - Input Short Summary
  - Input Description
  - Select Reporter
  - Select Assignees
  - Select Priority(Highest, High, Low, Lowest)

- Implement "Search issue" functionality
  - Write Search Input
  - Show recent issues

- Basic Issue Management Panel
  - Implement issue stage movement
  - Implement Filter functionality(Only My Issues, Recently Updated)

- Mannage of each issue in detail
  - Show the details of issue on Modal
  - Status selection

## Languages and Packages

- A variety of custom light-weight UI components such as datepicker, modal, various form elements etc
- Simple local React state management, without redux, mobx, or similar
- Custom webpack setup, without create-react-app or similar
- Client written in Babel powered JavaScript
- API written in TypeScript and using TypeORM

## Setting up development environment 🛠

- `npm run install-dependencies`
- `cd api && npm start`
- `cd client && npm start` in another terminal tab
- App should now be running on `http://localhost:8080/`

## Running cypress end-to-end tests 🚥

- Set up development environment
- Create a database named `jira_test` and start the api with `cd api && npm run start:test`
- `cd client && npm run test:cypress`

## License