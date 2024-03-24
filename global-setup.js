// global-setup.js
const setupPuppeteer = require('jest-environment-puppeteer/setup');
const MCR = require('monocart-coverage-reports');
const coverageOptions = require('./mcr.config.js');

module.exports = async function globalSetup(globalConfig) {
    await setupPuppeteer(globalConfig);
    // Your global setup

    // console.log('globalSetup');

    const mcr = MCR(coverageOptions);
    mcr.cleanCache();

};
