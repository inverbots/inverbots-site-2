import Header from '@/components/header/Header'
import Form from '@/components/form/Form'
import WhatsappBtn from '@/components/whats-btn/WhatsBtn'
import Footer from '@/components/footer/Footer'

export default function RootLayout ({ children }) {
  return (
    <html lang='en, es'>
      <body>
        <Header />
        {children}
        <Form />
        <WhatsappBtn />
        <Footer />
      </body>
    </html>
  )
}
