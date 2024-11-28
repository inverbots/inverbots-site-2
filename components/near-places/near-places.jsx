import Title from "../page-layout/title-layout"

export default function NearPlaces({ page }) {
	
	const { lugares_cercanos } = page
	const nameClass = 'c-near'

	return (
		<div className = {nameClass} >
			<Title text={'Lugares cercanos'} />
			<ul className={nameClass + '__list'}>
				{lugares_cercanos.map((list, index) => {
					return (
						<li key={index}  className={nameClass + '__element'}>{ list.texto }</li>
					)	
				})}
			</ul>
		</div>
	)

}