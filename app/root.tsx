import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  json,
  useLoaderData,
} from "remix";
import type { MetaFunction } from "remix";

import { useRef, useEffect } from "react";

import * as Fathom from "fathom-client";

import styles from "~/styles/importer.css";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return { title: "FastAPI and Remix Jobs" };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader = async () => {
  return json({
    ENV: {
      FATHOM_ID: process.env.FATHOM_ID,
      FATHOM_INCLUDED_DOMAIN: process.env.FATHOM_INCLUDED_DOMAIN,
      FATHOM_URL: process.env.FATHOM_URL,
    },
  });
}

export const onRouteChangeComplete = async (data: any) => {
  let fathomLoaded = useRef(false);
  let location = useLocation();

  useEffect(
    function setupFathom() {
      if (!fathomLoaded.current) {
        Fathom.load(data.ENV.FATHOM_ID, {
          url: data.ENV.FATHOM_URL
        });
        fathomLoaded.current = true;
      } else {
        Fathom.trackPageview();
      }
    },
    [location]
  );
};

export default function App() {
  // const data = useLoaderData();
  // onRouteChangeComplete(data);
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="col-lg-8 mx-auto p-3 py-md-5">
          <Header />
          <Outlet />
          <Footer />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `<script>
              (function(f, a, t, h, o, m){
                a[h]=a[h]||function(){
                  (a[h].q=a[h].q||[]).push(arguments)
                };
                o=f.createElement('script'),
                m=f.getElementsByTagName('script')[0];
                o.async=1; o.src=t; o.id='fathom-script';
                m.parentNode.insertBefore(o,m)
              })(document, window, '//stats.suprememvp.com/tracker.js', 'fathom');
              fathom('set', 'siteId', 'PGTWS');
              fathom('trackPageview');
              </script>`
            }}
          />
        </div>
      </body>
    </html>
  );
}
