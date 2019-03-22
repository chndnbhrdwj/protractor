exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./src/test/basic-test.js'],

    capabilities: {
      browserName: 'firefox'
    },

    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
  };