import Title from "../page-layout/title-layout"; 
import Image from "next/image";

export default function Description({ page }) {

	const {
		caracteristicas: {
			descripcion,
			zonas_comunes
		}
	} = page;
	const nameClass = 'c-desc'

	return(
		<>
			<div className={nameClass}>
				<div className={nameClass + '__container'}>
					<Title text={ 'Descripción' } />
					<p className={nameClass + '__p'}>{descripcion}</p>
				</div>
				<div className={nameClass + '__zc'}>
						<Title text={ 'Zonas comunes' } />
					<ul className={nameClass + '__content-list'}>
						{zonas_comunes.map((list, index) => {
								return (
									<li key = {index} className={ nameClass + '__element-list' }>
										<Image src={list?.icono} alt={'imagen desc'} width={40} height={40} />
										<p className={nameClass + '__element'}>{ list?.texto }</p>
									</li>
								)
						})}
					</ul>	
				</div>
			</div>
		</>
	)
}