const MCR = require('monocart-coverage-reports');
const coverageOptions = require('../mcr.config.js');
require('expect-puppeteer');

beforeAll(async () => {
    // start coverage
    await Promise.all([
        page.coverage.startJSCoverage({
            resetOnNavigation: false,
            includeRawScriptCoverage: true
        }),
        page.coverage.startCSSCoverage({
            resetOnNavigation: false
        })
    ]);


    // mock a page
    await page.setContent(`<html>
        <head></head>
        <body>
        <script>
        const a = "1";
        const uncovered = () => {
            console.log("uncovered");
        };
        //# sourceURL=src/example1.js
        </script>
        </body>
    </html>`);

});

afterAll(async () => {
    // add coverage
    const [jsCoverage, cssCoverage] = await Promise.all([
        page.coverage.stopJSCoverage(),
        page.coverage.stopCSSCoverage()
    ]);
    // to raw V8 script coverage
    const coverageList = [... jsCoverage.map((it) => {
        return {
            source: it.text,
            ... it.rawScriptCoverage
        };
    }), ... cssCoverage];

    const mcr = MCR(coverageOptions);
    await mcr.add(coverageList);

});

describe('Example test 1', () => {

    it('Example case 1', async () => {

    });

});
