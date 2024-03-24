# Jest Puppeteer Coverage Example
[jest-puppeteer](https://github.com/argos-ci/jest-puppeteer) coverage reports with [monocart coverage reports](https://github.com/cenfun/monocart-coverage-reports)

## Step 1, Install
```
npm i monocart-coverage-reports jest-puppeteer puppeteer jest -D
```

## Step 2, Collect V8 Coverage Data
Collect coverage data with hooks `beforeAll` and `afterAll`, see
- [test/example1.test.js](./test/example1.test.js)
- [test/example2.test.js](./test/example2.test.js)

## Step 3, Generate Coverage Reports
- Create jest [global-setup.js](global-setup.js) and [global-teardown.js](global-teardown.js) for generating coverage reports, see [jest.config.js](jest.config.js)
- Set coverage options in config file [mcr.config.js](mcr.config.js)

```sh
npm run test
```
The coverage report will be found here: `coverage-reports/index.html`

Check [monocart coverage reports](https://github.com/cenfun/monocart-coverage-reports) for more coverage options.

