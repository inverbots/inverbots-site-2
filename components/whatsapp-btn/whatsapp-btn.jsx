import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppBtn({ number, textWhatsapp }) {
	
	const nameClass = 'o-float';

	return (
		<div className={nameClass}>
			<div className={nameClass + '-flotante'}>
				<WhatsAppIcon/>
				<a className={nameClass + '__whatsapp'} href={`https://wa.me/57${number}?text=${encodeURI(textWhatsapp)}`}><span className="content-menu-flotante__whatsapp-text">Cotiza aquí por WhatsApp</span></a>	
			</div>
		</div>
	)

}