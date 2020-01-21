<p align="center"><img width="300" src="/src/assets/images/wp-react-ts.jpg" alt="React starter app with Headless Wordpress" /></p>

<h3 align="center">
  WP React Typescript
</h3>

<p align="center">
  A React starter app with Headless Wordpress using REST API
</p>

<p align="center">
  <a href="https://github.com/loq24/wp-react-typescript/"><img src="https://badges.frapsoft.com/typescript/code/typescript.svg?v=101"></a>
  <a href="https://github.com/loq24/wp-react-typescript/"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"></a>
</p>

## About

This project shows that the Headless Wordpress can be a perfect backend for your React project. It also encourages users to implement `Typescript` especially with `react-redux` library. The project is fully tested using `JEST` & `Enzyme`.

## Demo

:last_quarter_moon_with_face: Now with Dark mode! [https://wp-react-ts.lougiequisel.com/signin](https://wp-react-ts.lougiequisel.com/signin)

![wp-react](/src/assets/images/dark-mode.gif)

## Installation

For the backend, make sure that the [JWT plugin](https://github.com/Tmeister/wp-api-jwt-auth) is installed and properly set up in your Wordpress website. The plugin has a detailed instructions on it's [github](https://github.com/Tmeister/wp-api-jwt-auth) page.

After setting up your backend website, you can clone this repository and replace the API configuration found in `/src/constants/index.ts`. Mainly, just replace the `baseUri` value. Run the following commands:

```bash
git clone https://github.com/loq24/wp-react-typescript
yarn install OR npm install
yarn start OR npm start
```

This app is also fully tested. To check the test status run:

```bash
yarn test OR npm test
```

## License

MIT
