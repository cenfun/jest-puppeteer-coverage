// global-teardown.js
const teardownPuppeteer = require('jest-environment-puppeteer/teardown');
const MCR = require('monocart-coverage-reports');
const coverageOptions = require('./mcr.config.js');

module.exports = async function globalTeardown(globalConfig) {
    // Your global teardown

    // console.log('globalTeardown');
    const mcr = MCR(coverageOptions);
    await mcr.generate();

    await teardownPuppeteer(globalConfig);
};
