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
  '/home-v2.html',
  '/home-v3.html',
  '/home-v4.html',
  '/home-v5.html',
  '/about-us.html',
  '/services.html',
  '/service-details.html',
  '/doctors.html',
  '/doctor-details.html',
  '/contact-us.html',
  '/blog.html',
  '/blog-sidebar.html',
  '/blog-details.html',
  '/appointment.html',
  '/shop.html',
  '/shop-details.html',
  '/cart.html',
  '/checkout.html',
  '/event.html',
  '/event-details.html',
  '/facilities.html',
  '/faq.html',
  '/testimonials.html',
  '/pricing.html',
  '/packages.html',
  '/career.html',
  '/patient-resource.html',
  '/location.html',
  '/login.html',
  '/register.html',
  '/password.html',
  '/privacy-policy.html',
  '/term-condition.html',
  '/error-404.html',
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

      const html = await page.content();
      const outPath = route === '/'
        ? path.resolve('dist/index.html')
        : path.resolve('dist' + route);

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
