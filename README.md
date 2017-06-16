# Launchii

[![Build Status](https://circleci.com/gh/launchii/launchii.svg?style=shield&circle-token=3876ee4795691fdae21450d22c99bd6a8c939e18)](https://circleci.com/gh/launchii)

## Getting started

### Install Node modules and Bower Components

First off, you will need to install the required modules:

```
    npm install
    bower install
```

*Please notify a team member if the specs are not passing.*

### Configuration

Set up api domain in `app/core/constants.js`. Make sure to add a trailing slash.

### Start up server:

Simple server setup:

For global install:

```
    npm install -g http-server
```
Go to Launchii Vendor project directory and enter command:

```
    http-server -o
```

For local installation, go to Launchii Vendor project directory and do command:

```
    npm install http-server
```

Then run server:

```
    node_modules/http-server/bin/http-server -o
```

### Open:

Navigate to the website via your browser:

```
    http://localhost:8080
```

## Tests

### Unit & Integration Test

```
	npm run test
```

### E2E Test

Run the server and selenium server.
```
    http-server -o
    npm run webdriver-update
    npm run webdriver
```
Run Test
```
	gulp e2e
```

