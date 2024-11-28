import Image from "next/image"
import logoBran from '../../public/logo-tierra-linda.png'

export default function Footer() {
	
	const nameClass = 'o-footer'
	
	return (
		<footer className={nameClass}>
			<div className={nameClass+'__logo'}>
				<Image src={logoBran}
					className={nameClass + '__logo'}
					width={250}
					height={250}
				/>
			</div>
			<div className={nameClass+'__titles'}>
				
			</div>
			<div className={nameClass+'__titles'}>
					<h2 className={nameClass+'__contact'}>Contáctanos</h2>
				<a className={nameClass + '__whatsApp'} href="https://api.whatsapp.com/send/?phone=%2B573115986040&amp;text&amp;type=phone_number&amp;app_absent=0">
					<Image className={nameClass + '__icons'} width={50} height={50} src="http://admin.tierralindacampestre.com.co/wp-content/themes/montevedra/assets/img/icon-wpp.svg"/>+57 311 598 6040
				</a>
			</div>
		</footer>
	)
}