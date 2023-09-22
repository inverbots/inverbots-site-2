import 'normalize.css'
import '../styles/globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import WhatsappBtn from '@/components/whats-btn/WhatsBtn'
import RootHead from '@/components/head/RootHead'


export const metadata = {
  metadataBase: new URL("https://inverbots.com"),
  title: {
    default: "Inverbots - la mejor academia de trading con ayuda de robots",
    template:`%s | Inverbots - la mejor academia de trading con robots`
  },
  description: `la mejor academia de trading con ayuda de robots`,
}


export default function RootLayout({ children }) {

  return (
    <html lang='es'>
      <RootHead/>
      <body>
        <Header />
        {children}
        <WhatsappBtn />
        <Footer />
      </body>
    </html>
  )
}
