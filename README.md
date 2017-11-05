# Express + Webpack + Angular

Development setup for Angular and Webpack. Webpack ist configured to support lazy loading in Angular.

## Important

You have to change the `alias` in `webpack.config.js` to your corresponding folders. Because `webpack.config.js` is created through `angular-cli` with the command `ng eject`

## Setup

Clone this repsitory into your local folder. `cd` into that folder an run the npm command
```
npm i
```
This will install the backend components

* `express`
* `morgan`
* `body-parser`

Next you have to `cd` into the folder `public` and run the npm command

```
npm i
```

This will install the angular components and the dependencies. To run the local Wepack-Dev-Server out have to run the following npm command in that folder

```
npm start
```

To build the app yout have to run the command
```
npm run build
```
