# How to use @solana npm libraries, react, and typescript to connect a user's wallet

This project was a learning experiment on how to connect users' web3 wallet. In this case Phantom to a website that is powered by React & Typescript.

# Libraries used

React version 18.1.0
Typescript
[@Solana](https://solana-labs.github.io/solana-web3.js/)

# Gotchas

When using `create-react-app` to bootstrap a brand new React application, this was current as of 5/31/2022, because of missing polyfills with the use of Webpack the @solana libraries would not work correctly and you would get polyfill errors.

# Resolution 

In order to resolve this without moving back to a previous version of react. Here are the steps to resolve:

1. Install `react-app-rewired` use the command `npm install --save-dev react-app-rewired`
2. Install missing dependencies
```
npm install --save-dev crypto-browserify stream-browserify assert stream-http https-browserify os-browserify url buffer process
```
3. Override `create-react-app` webpack config by creating a file called `config-overrides.js` which is included in this repository
4. Override `package.json` specifically the 'scripts' portion to use `react-app-rewired` exceept for the `eject` portion

That's it! It should now work and you will no longer get the polyfill error when using @solana NPM package.
