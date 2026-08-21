// Prerenders every React Router route to real static HTML so crawlers,
// link-preview bots, and slow connections get actual content instead of
// an empty <div id="root"></div> shell. Runs after `vite build`.
import { chromium } from 'playwright-core';
import { preview } from 'vite';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

// Vercel's build container has no root/apt access, so the regular desktop
// Chromium build (downloaded by plain `playwright`) fails to launch there —
// it's missing OS shared libraries (e.g. libnspr4.so) that only `apt-get
// install` could provide. @sparticuz/chromium ships a Chromium build
// compiled specifically for restricted serverless/CI Linux containers, so
// we use that whenever we're not on a developer's own machine.
async function launchBrowser() {
  if (process.env.VERCEL || process.env.CI) {
    const chromiumServerless = (await import('@sparticuz/chromium')).default;
    return chromium.launch({
      args: chromiumServerless.args,
      executablePath: await chromiumServerless.executablePath(),
      headless: true,
    });
  }
  // Local dev: use the developer's own installed Google Chrome.
  return chromium.launch({ channel: 'chrome' });
}

const routes = [
  '/',
  '/home-v2',
  '/home-v3',
  '/home-v4',
  '/home-v5',
  '/about-us',
  '/services',
  '/service-details',
  '/doctors',
  '/doctor-details',
  '/contact-us',
  '/blog',
  '/blog-sidebar',
  '/blog-details',
  '/appointment',
  '/shop',
  '/shop-details',
  '/cart',
  '/checkout',
  '/event',
  '/event-details',
  '/facilities',
  '/medical-visa',
  '/cost-calculator',
  '/orthopedic-surgery',
  '/faq',
  '/testimonials',
  '/pricing',
  '/packages',
  '/career',
  '/patient-resource',
  '/location',
  '/login',
  '/register',
  '/password',
  '/privacy-policy',
  '/term-condition',
  '/error-404',
];

async function run() {
  const server = await preview({ preview: { port: 4174, strictPort: true } });
  const base = `http://localhost:4174`;

  const browser = await launchBrowser();
  const page = await browser.newPage();

  let ok = 0;
  let failed = [];

  for (const route of routes) {
    try {
      await page.goto(base + route, { waitUntil: 'networkidle', timeout: 30000 });
      // Give React a moment to finish mounting/animations settling.
      await page.waitForSelector('main', { timeout: 10000 }).catch(() => {});
      await page.waitForTimeout(300);

      // Physical build output always keeps the .html extension — that's what
      // Vercel's `cleanUrls` setting (vercel.json) looks for when it serves
      // a request to the extension-less route (e.g. /services -> dist/services.html).
      const html = await page.content();
      const outPath = route === '/'
        ? path.resolve('dist/index.html')
        : path.resolve('dist' + route + '.html');

      await writeFile(outPath, html, 'utf-8');
      ok++;
      console.log(`✓ ${route}`);
    } catch (err) {
      failed.push(route);
      console.error(`✗ ${route} — ${err.message}`);
    }
  }

  await browser.close();
  await server.httpServer.close();

  console.log(`\nPrerendered ${ok}/${routes.length} routes.`);
  if (failed.length) {
    console.error('Failed routes:', failed.join(', '));
    process.exitCode = 1;
  }
}

run();
