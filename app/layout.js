import 'normalize.css'
import '../styles/globals.css'
import Header from '@/components/header/Header'
import Form from '@/components/form/Form'
import Footer from '@/components/footer/Footer'
import TextCallAction from '@/components/text-call-to-action/TextCallAction'
import WhatsappBtn from '@/components/whats-btn/WhatsBtn'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <head>
        <meta httpEquiv="content-type" content="text/html"/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
        <meta name='keywords' content='Inverbots, Mercado de futuros, Inversiones,Robots de traiding, Academia de trading, trader, bolsa de valores' />
        <meta name='author' content='Inverbots' />
        <meta name='google-site-verification' content='bPuKNVrJr2DOOOu0fhvQypoVd_yAnFBypnMclDZGbNE' />

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

      </head>
      <body>
        <Header />
        {children}
        <section className='content_form'>
          <TextCallAction
            firstTitle='Comienza ya con'
            secondTitle='robots de trading'
            description='¡Optimiza tus operaciones de trading con nuestros robots!
            Deja tus datos en el formulario para más información.'
          />
          <Form />
        </section>
        <WhatsappBtn />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
