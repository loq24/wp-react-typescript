<p align="center"><img width="300" src="/assets/images/wp-react-ts.jpg" ></p>

<h3 align="center">
  WP React Typescript
</h3>

<p align="center">
  A React starter app with Wordpress backend using REST API
</p>

<p align="center">
  <a href="https://github.com/loq24/wp-react-typescript/"><img src="https://badges.frapsoft.com/typescript/code/typescript.svg?v=101"></a>
  <a href="https://github.com/loq24/wp-react-typescript/"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"></a>
</p>  

## About

Based from [this](https://github.com/loq24/wp-react) original project, `wp-react-typescript` was developed to serve as a guide to easily build a ReactJS frontend with Wordpress as a backend. It also comes with a `JWT` authentication. The project is made with `Typescript` that is fully tested using `JEST` & `Enzyme`.

## Demo

[https://wp-react-ts.lougiequisel.com/signin](https://wp-react-ts.lougiequisel.com/signin)

![wp-react](/assets/images/demo.gif)

## Installation

For the backend, make sure that the [JWT plugin](https://github.com/Tmeister/wp-api-jwt-auth) is installed and properly set up in your Wordpress website. The plugin has a detailed instructions on it's [github](https://github.com/Tmeister/wp-api-jwt-auth) page.

After setting up your backend website, you can clone this repository and replace the API configuration found in `/src/constants/index.ts`. Mainly, just replace the `baseUri` value. You then have to run the following basic command to run the frontend:
```bash
yarn start OR npm start
```

## License

MIT
