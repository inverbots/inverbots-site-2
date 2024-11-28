import Head from "next/head"

export default function PageLayout({ children, title = 'Nido' }) {
	return (
		<>
			<Head>
				<title>{ title }</title>
				<meta name="description" content="un lujo natural" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="https://tierralinda.movemospruebas.com/wp-content/uploads/2023/02/cropped-Logo-Nido-1.png" />
			</Head>
		</>
	)
}