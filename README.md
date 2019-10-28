# Transactions Manager

This project was created as a requirement for a job interview.

It is a React Application that register and deletes money transactions (credits or debits), list them in recency order and shows the final balance.

## Features:

- Add your debits or debits
- List the transactions ordered by most recent ones
- Calculates the balance of your transactions and shows it on the screen
- Delete transactions from the list
- A Switch that togles betwenn 2 different style theme: Light and Dark
- The theme chosen and all the transactions registered are saved in browser's localSorage

## Future features:

- Add filters (by type, by recency, ...)
- Add new transaction fields (date, ...)
- Add selection of different money currencies (Dollar, Euro, ...) fetched by API
- Create log in page to add users

## Running the app in development mode:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Make sure that you have NodeJS installed: `node -v`

Install all dependencies: `yarn install`

Running a local server: `yarn start`

## Development tools used:

For Unit Tests, this project uses:
- [Jest](https://jestjs.io/): JavaScript Testing Framework 
- [Enzyme](https://airbnb.io/enzyme/): JavaScript Testing utility for React that makes it easier to test your React Components' output 

For the development of this project, tools were installed to help in the optimization and quality assurance of the developed code:
- [Prettier](https://prettier.io/): An code formatter that integrates with most editors, helps saving time and keep code style consistent
- [ESLint](https://eslint.org/): ESLint is tool created to provide a pluggable linting utility for JavaScript
- [Husky](https://www.npmjs.com/package/husky): Creates Git hooks in an easy way preventing bad commits and bad pushes.

Husky was configured to run Pretty and ESLint in pre commit git hook and to run Unit Tests in pre push git hook

In the project directory, you can run:

#### `npm test`

Runs the Unit Tests

#### `npm run test:coverage`

Runs the Unit Tests and generates code coverage

### Deployment

Find nore about this subject in here: https://facebook.github.io/create-react-app/docs/deployment
