const puppeteer = require("puppeteer");

/**
 * Capture screenshots of the website with different themes.
 */
async function captureScreenshots(deploymentUrl) {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  /**
   * Capture a screenshot of the page with the specified theme.
   * @param theme - The theme to set in localStorage ("light" or "dark").
   */
  async function captureScreenshot(theme) {
    await page.goto(deploymentUrl);

    // Set theme in localStorage and reload the page
    await page.evaluate((theme) => {
      localStorage.setItem("theme", theme);
      location.reload();
    }, theme);

    // Wait for 2 seconds to allow animations to finish
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Get the width of the header's content (eliminates the empty space on the sides)
    const headerWidth = await page.evaluate(() => {
      const header = document.querySelector("header > div");
      return header ? header.offsetWidth : 0;
    });

    // Set the viewport width to match the header's width
    if (headerWidth) {
      await page.setViewport({
        width: headerWidth,
        height: 800,
        deviceScaleFactor: 3,
      });
    }

    await page.screenshot({ path: `screenshot-${theme}.png`, fullPage: true });
  }

  await captureScreenshot("light");
  await captureScreenshot("dark");

  await browser.close();
}

const deploymentUrl = process.argv[2];

captureScreenshots(deploymentUrl);
