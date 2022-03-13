import { useLoaderData, json } from "remix";

export const loader = async () => {
  return json({
    ENV: {
      FATHOM_ID: process.env.FATHOM_ID,
      FATHOM_INCLUDED_DOMAIN: process.env.FATHOM_INCLUDED_DOMAIN,
      FATHOM_URL: process.env.FATHOM_URL,
    },
  });
}

export default function Fathom() {
  const data = useLoaderData();

  return (
    <>
        {
          process.env.NODE_ENV === "production" ?
            <script
            async
            dangerouslySetInnerHTML={{
              __html: `
              (function(f, a, t, h, o, m){
                a[h]=a[h]||function(){
                  (a[h].q=a[h].q||[]).push(arguments)
                };
                o=f.createElement('script'),
                m=f.getElementsByTagName('script')[0];
                o.async=1; o.src=t; o.id='fathom-script';
                m.parentNode.insertBefore(o,m)
              })(document, window, '${data.ENV.FATHOM_URL}', 'fathom');
              fathom('set', 'siteId', '${data.ENV.FATHOM_ID}');
              fathom('trackPageview');`
            }}
          /> : null
        }
      </>
  );
}
