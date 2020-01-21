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

In order to run this App in your local machine, run the commands below. Make sure `yarn` or `npm` is already installed in your computer.

```bash
git clone https://github.com/loq24/wp-react-typescript
cd wp-react-typescript
yarn install OR npm install
yarn start OR npm start
```
The app will open in **http://localhost:3000/**


<h4>Setting up your own Wordpress backend</h4>

Install a Wordpress website and make sure that the [JWT Plugin](https://github.com/Tmeister/wp-api-jwt-auth) is installed and activated. The plugin has a detailed instruction on it's [github](https://github.com/Tmeister/wp-api-jwt-auth) page. 
Replace the API configuration found in your `/src/constants/index.ts` file. Make sure to replace the `baseUri` value with your API's url. 

This app is also fully tested. To check the test status run:

```bash
yarn test OR npm test
```

## License

MIT
