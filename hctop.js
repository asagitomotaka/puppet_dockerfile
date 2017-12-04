const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36');
  // await page.setExtraHTTPHeaders({
  //   'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8'
  // });
  await page.setViewport({ width: 1200, height: 800, scale: 1 });

  await page.goto('https://www.humancrest.co.jp');
  await page.screenshot({ path: 'hc.png' });

  browser.close();
})();
