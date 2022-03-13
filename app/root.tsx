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

import styles from "~/styles/importer.css";

import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Fathom from "./components/Utils/fathom";

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

export default function App() {
  
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
          <Fathom />
        </div>
      </body>
    </html>
  );
}
