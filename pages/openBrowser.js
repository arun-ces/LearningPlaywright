const { chromium, firefox, webkit } = require('playwright');

// const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function setupBrowser(browserType = 'edge') {
  switch (browserType.toLowerCase()) {
    case 'chrome':
      console.log('Launching Chrome browser');
      return await chromium.launch({
        headless: true,
        channel: 'chrome'});

    case 'firefox':
      return await firefox.launch({ headless: false });

    case 'webkit':
      return await webkit.launch({ headless: false });

    case 'edge':
      console.log('Launching Edge browser');
      return await chromium.launch({
        headless: true,
        // executablePath: EDGE_PATH,
        channel: 'msedge'
      });

    default:
      throw new Error(`Unsupported browser type: ${browserType}`);
  }
}