const { requireAsync } = require("../common/preinvocation");

module.exports = async function (context, req) {
    const puppeteer = await requireAsync("puppeteer");
    const url = (req.body && req.body.url) || req.query.url || "https://microsoft.com/ja-jp/";
    const browser = await puppeteer.launch({
        timeout: 0
    });
    const page = await browser.newPage();
    await page.goto(url);
    const screenshotBuffer = await page.screenshot({ fullPage: true });
    await browser.close();

    context.res = {
        body: screenshotBuffer,
        headers: {
            "content-type": "image/png"
        }
    };
};