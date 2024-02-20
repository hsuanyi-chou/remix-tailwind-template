import type { LinksFunction } from '@remix-run/node';
import stylesheet from '~/tailwind.css';
import rdtStylesheet from 'remix-development-tools/index.css';

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

const defaultLinks: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

export const links: LinksFunction = () => {
  if (process.env.NODE_ENV === 'development') {
    return [...defaultLinks(), { rel: 'stylesheet', href: rdtStylesheet }];
  }
  return defaultLinks();
};

function App() {
  return (
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
      </body>
      </html>
  );
}

let AppExport = App;

// This imports the dev tools only if you're in development
if (process.env.NODE_ENV === 'development') {
  const { withDevTools } = await import('remix-development-tools');
  AppExport = withDevTools(AppExport);
}

export default AppExport;
