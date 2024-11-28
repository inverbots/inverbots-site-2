import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image';

import "swiper/css";

export default function Slider({ page }) {
	
	const { texto_slider, slider_imagenes} = page
	const nameClass = 'c-slider' 

	return (
		<>
			<div className={ nameClass }>
				<h2 className={nameClass + '__title'} dangerouslySetInnerHTML={{ __html: texto_slider }} />
				<Swiper
					className={nameClass + '__contents'}
					speed={800}
					loop = {true}
					spaceBetween={30}
					slidesPerView={1}
					centeredSlides={true}
					autoplay={{
						delay: 3500,
						disableOnInteraction: false,
					}}
					navigation={true}
					breakpoints={{
						768:{
							slidesPerView: 2,
							spaceBetween: 10,
							centeredSlides: true,
							loop:true
						}
					}}
					modules={[Autoplay, Pagination, Navigation]}
				>
					{slider_imagenes.map((slide, index) => {

						return (
							<SwiperSlide key={ index }  className={ nameClass + '__content-slide' }>
								<Image
									className={nameClass + '__slide'}
									alt='slide-image'
									src={slide.agregar_imagen}
									width={2560}
									height={1707}
									
								/>
							</SwiperSlide>
						)
					})

					}
				</Swiper>
			</div>
    </>
  )
}