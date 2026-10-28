const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
  await p.goto('file://' + process.cwd() + '/thumb.html'); await p.waitForTimeout(800);
  await p.locator('#c').screenshot({ path: 'aa13-thumbnail.png' });
  const q = await b.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1.5 });
  await q.goto('file://' + process.cwd() + '/thumb.html'); await q.waitForTimeout(800);
  await q.locator('#c').screenshot({ path: 'aa13-cover-1920x1080.png' });
  await b.close();
})();
