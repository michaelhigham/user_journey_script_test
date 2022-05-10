// Example script
async function testPage(page) {
 await page.goto(\"https://www.google.com/\");
 await page.screenshot({ path: '\''screenshot.jpg'\'' });
}
module.exports = testPage;
