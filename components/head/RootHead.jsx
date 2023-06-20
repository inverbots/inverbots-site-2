import Script from "next/script"
import Yoast from "../yoast/Yoast"

export default function RootHead(props) {

  return (
    <head>
      <meta name="robots" content="index,follow" />
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
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '324446205054171'); 
          fbq('track', 'PageView');
      

        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:1414034,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}

      </Script>
      {/* <Yoast slug={props.slug} /> */}
    </head>
  )
}