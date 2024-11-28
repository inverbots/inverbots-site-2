import PageLayout from '@/components/page-layout/page-layout';
import Hero from '@/components/hero/hero';
import Slider from '@/components/slider-zv/slider-zv';
import FloatCard from '@/components/float-card/float-card';
import Formwhats from '@/components/form/form-whats';
import Description from '@/components/description/description';
import Aparments from '@/components/aparments/aparments';
import Map from '@/components/map/map';
import NearPlaces from '@/components/near-places/near-places';
import Footer from '@/components/footer/footer';
import WhatsAppBtn from '@/components/whatsapp-btn/whatsapp-btn';
import Popupform from '@/components/popup/popup';

import React, { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState();
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return screenWidth;
};

export default function Home({ page }) {
  const screenWidth = useScreenWidth();
  const acf = page[0].acf;

  return (
    <>				
    <noscript dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXCN43VT"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    }} />
      <PageLayout title='Tierra Linda' />
      <main>
        <div className='content-page'>
          <Hero page={acf} />
        </div>
        <div className='page-layout'>
          <div className='main-content'>
            <Slider page={acf} />
            {screenWidth < 750 ? <Formwhats /> : ''}
            <Description page={acf} />
            <Aparments pages={acf} />
            {screenWidth < 750 ? <Formwhats /> : ''}
            <Map page={acf} />
            <NearPlaces page={acf} />
            {screenWidth < 750 ? <Formwhats /> : ''}
          </div>
          {screenWidth > 750 ? (
            <div className='float-card'>
              <FloatCard />
            </div>
          ) : (
            ''
          )}
        </div>
      </main>
      {screenWidth < 780 ? (
        <WhatsAppBtn number={'3115986040'} textWhatsapp={'¡Hola! Me interesa conocer más de Tierra Linda'} />
      ) : (
        ''
      )}
      <Footer />
      <Popupform />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch('https://tierralinda.movemospruebas.com/wp-json/wp/v2/pages?slug=tierra-linda');
    const page = await response.json();

    return { props: { page } };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
}
