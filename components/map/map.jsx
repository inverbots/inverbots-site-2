
import Link from 'next/link'
import Title from '../page-layout/title-layout'

export default function Map({page}) {
	
	const nameClass = 'c-map'
	const { embeber_mapa, enlace_, enlace_google_maps} = page

	return (
		<div className={nameClass}>
			<Title text={ 'Cómo llegar' }/>
			<div className={nameClass + '__map'}>
				<div className={nameClass + '__map-content'} dangerouslySetInnerHTML={{ __html: embeber_mapa }} />
			</div>
			<div className={nameClass + '__btn-map'}>
				<Link className={nameClass + '__link-map'} href={enlace_google_maps}><img src='https://tierralinda.movemospruebas.com/wp-content/themes/montevedra//assets/img/icon-maps.svg' /></Link>
				<Link className={nameClass + '__link-waze'} href={enlace_}><img src='https://tierralinda.movemospruebas.com/wp-content/themes/montevedra//assets/img/icono-waza.svg' /></Link>
			</div>
			
			</div>
	)

}