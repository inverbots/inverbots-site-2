import Image from "next/image";
import React, { useState, useEffect } from 'react';

const useScreenWidth = () => {
	const [screenWidth, setScreenWidth] = useState();

	useEffect(() => {
		setScreenWidth(window.innerWidth);
	}, []);

	return screenWidth
}

export default function Hero({ page }) {
	const nameClass = 'c-hero';
	const { imagen_banner_principal, imagen_banner_principal_mobile } = page
	const screenWidth = useScreenWidth();

	return (
		<>
			<div className={ nameClass }>

				{ screenWidth > 750 ?
					<Image
						className={nameClass + '__imagen'}
						src={imagen_banner_principal}
						alt={`Nido, banner`}
						width={1440}
						height={500}
						priority={true}
					/>
				 : 
						<Image
							src={imagen_banner_principal_mobile}
							alt={`Nido, banner`}
							width={320}
							height={500}
							priority={true}
						/>
				}
			</div>
		</>
	)
}