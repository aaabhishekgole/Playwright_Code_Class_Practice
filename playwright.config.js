const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  timeout: 30 * 1000,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: { headless: true },
});
