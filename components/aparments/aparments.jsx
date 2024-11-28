import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Title from '../page-layout/title-layout';
import Icon from '@mui/material/Icon';
import { useState } from 'react';
import Image from 'next/image';

export default function Aparments({ pages }) {

	const { tipo_de_partamento } = pages
	
	
	const nameClass = 'c-aparments'
	const MyIcon = 'https://tierralinda.movemospruebas.com/wp-content/themes/montevedra/assets/img/icono-row.svg';

	const [expanded, setExpanded] = useState(false);
	const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

	return (
			<div className={ nameClass }>
			<Title text={ 'Tipos de Apartamentos' } />
				<div className={nameClass + '__conten-tabs'}>

				{tipo_de_partamento.map((single, index) => {

							return( 
								<Accordion
									key={index}
									className={nameClass + '__accordion'}
									expanded={expanded === index + '-panel'} onChange={handleChange(index + '-panel')}>
									<AccordionSummary
									expandIcon={
											<Icon><Image src={MyIcon} alt="Mi imagen" width={23} height={23} /></Icon>
									}
								>	
										<h2 className={ nameClass + '__title-apartment' } dangerouslySetInnerHTML={{__html:single.titulo_apartamento}} />
								</AccordionSummary>
								<AccordionDetails
									className={nameClass + '__details'}
								>
										<div className={nameClass + '__imgen-content'}>
											<Image className={nameClass + '__imgen-content'}
												src={single.imagen_apartamento}
												width={350}
												height={350}
												
											/>
										</div>
										<ul className={nameClass + '__caracteristics'}>
											{
												single.caracteristicas_apartamento.map((e, index) => {
													return (
														<li key={ index }  className={nameClass + '__caract-element'}>
															<Image className={nameClass + '__imgen-content'} src={e?.icono.url} width={20} height={20}  />
															<p className={nameClass + '__text'}>{ e.texto }</p>
														</li>
													)
												})
											}
										</ul>
									</AccordionDetails>
								</Accordion>
							)
					})
				}
				
				</div>

				</div>
		)

}