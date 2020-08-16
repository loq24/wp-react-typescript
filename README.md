<p align="center"><img width="300" src="/src/assets/images/wp-react-ts.jpg" alt="React starter app with Headless Wordpress" /></p>

<h3 align="center">
  WP React Typescript
</h3>

<p align="center">
  A React starter app with Headless Wordpress using REST API
</p>

<p align="center">
  <a href="https://github.com/loq24/wp-react-typescript/"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"></a>
</p>

## What's included?

- A Wordpress backend that's been preconfigured to support authentication using [wp-api-jwt-auth](https://github.com/Tmeister/wp-api-jwt-auth) plugin
- Other plugins which expose Custom Fields and WP Menus data via REST API. Which are [acf-to-wp-api](https://wordpress.org/plugins/acf-to-wp-api/) and [wp-rest-api-v2-menus](https://wordpress.org/plugins/wp-rest-api-v2-menus/)
- A pro version of [ACF](https://advancedcustomfields.com/) plugin
- A sample, starter React app that uses `Typescript` & `react-redux`

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

<h4>Setting up the included Wordpress backend</h4>

1. Everything is preconfigured except for the database. Replace the database credentials in `wp-config.php`
2. Activate the plugins that are included in the WP backend
3. Replace the API configuration found in your `/src/constants/index.ts` file. Make sure to replace the `baseUri` value with your WP API's url.

This app is also fully tested. To check the test status run:

```bash
yarn test OR npm test
```

## License

MIT
