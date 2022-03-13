export default function Fathom(props: any) {
  console.log('props', props);
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
              })(document, window, '${props.data.ENV.FATHOM_URL}', 'fathom');
              fathom('set', 'siteId', '${props.data.ENV.FATHOM_ID}');
              fathom('trackPageview');`
            }}
          /> : null
        }
      </>
  );
}
