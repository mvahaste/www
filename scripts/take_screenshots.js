const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

/**
 * Capture screenshots of the website with different themes.
 */
async function captureScreenshots(deploymentUrl, screenshotsDir) {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    args: ["--no-sandbox", "--font-render-hinting=medium"],
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

    await page.screenshot({
      path: path.join(screenshotsDir, `${theme}.png`),
      fullPage: true,
    });

    console.log(`Screenshot taken for theme: ${theme}`);
  }

  await captureScreenshot("forest-light");
  await captureScreenshot("forest-dark");
  await captureScreenshot("coffee-light");
  await captureScreenshot("coffee-dark");

  await browser.close();
}

// Get the deployment URL from command line arguments
const deploymentUrl = process.argv[2];

if (!deploymentUrl) {
  console.error("Please provide the deployment URL as an argument.");
  process.exit(1);
}

// Ensure the screenshots directory exists
const screenshotsDir = path.join(__dirname, "../screenshots");

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);

  console.log(`Created directory: ${screenshotsDir}`);
}

captureScreenshots(deploymentUrl, screenshotsDir);
