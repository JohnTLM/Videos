// Draws every slide-*.html in a folder as a 1920x1080 PNG beside it.
// Usage: node render.js <folder>   (needs Playwright; with a global install set NODE_PATH to `npm root -g`)
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

(async () => {
  const dir = process.argv[2];
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  for (const f of fs.readdirSync(dir).filter(f => /^slide-\d+\.html$/.test(f)).sort()) {
    await page.goto(pathToFileURL(path.resolve(dir, f)).href);   // also right for Windows paths
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(dir, f.replace(".html", ".png")) });
  }
  await browser.close();
})();
