# Transactions Manager

This project was created as a requirement for a job interview.

It is a React Application that registers and deletes money transactions (credits or debits), list them in recency order and shows the final balance.

## Features:

- Add your debits and/or credits
- List the transactions ordered by most recent ones
- Calculate the balance of your transactions and shows it on the screen
- Delete transactions from the list
- Theme switch that togles betwenn 2 different styling themes: Light and Dark
- The theme chosen and all the transactions registered are saved in browser's localSorage

## Future features:

- Add filters (by type, by recency, ...)
- Add new transaction fields (date, ...)
- Add selection of different money currencies (Dollar, Euro, ...) fetched by API
- Create login page to add users

## Development tools used:

For Unit Tests, this project uses:
- [Jest](https://jestjs.io/): JavaScript Testing Framework 
- [Enzyme](https://airbnb.io/enzyme/): JavaScript Testing utility for React that makes it easier to test your React Components' output 

For development optimization and code quality assurance, this tools are also used:
- [Prettier](https://prettier.io/): An code formatter that integrates with most editors, helps saving time and keep code style consistent
- [ESLint](https://eslint.org/): ESLint is tool created to provide a pluggable linting utility for JavaScript
- [Husky](https://www.npmjs.com/package/husky): Creates Git hooks in an easy way preventing bad commits and bad pushes.

Husky was configured to run Pretty and ESLint in pre commit git hook and to run Unit Tests in pre push git hook

In the project directory, you can:

Run Unit tests: `npm test`

Run Unit sests and generate code coverage: `npm run test:coverage`

## Running the app in development mode:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Make sure that you have NodeJS installed: `node -v`

Install all dependencies: `yarn install`

Running a local server: `yarn start`

### Deployment

Find nore about this subject in here: https://facebook.github.io/create-react-app/docs/deployment
