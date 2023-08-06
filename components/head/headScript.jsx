import Script from "next/script"

export default function HeadScript() {
  <>
   <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=UA-121855589-1'
      />

      <Script
        id='gooogle-analytics'
        strategy='afterInteractive'
      >
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-121855589-1');
        gtag('config', 'AW-746826540');`}
      </Script>

      {/* Facebook Pixel Code */}
      <Script
        id='facebook-analytics'
        strategy='afterInteractive'
      >
        {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '792391655723604');
          fbq('track', 'PageView');`}
      </Script>
      
      <Script type="text/javascript"
        id='microsft-analytics'
        strategy='afterInteractive'
      >
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "hrj02ap8dk");`}
      </Script>
  </>
} 