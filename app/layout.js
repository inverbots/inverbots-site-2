import 'normalize.css'
import '../styles/globals.css'
import style from './page.module.css'
import Header from '../components/header/Header'
import Form from '@/components/form/Form'
import Footer from '@/components/footer/Footer'
import TextCallAction from '@/components/text-call-to-action/TextCallAction'

export default function RootLayout ({ children }) {
  return (
    <html lang='en, es'>
      <head>
        <title>Inverbots | La mejor academia de trading </title>
      </head>
      <body>
        <Header />
        {children}
        <section className={style.content_form}>
          <TextCallAction
            firstTitle='Comienza ya con'
            secondTitle='robots de trading'
            description='¡Optimiza tus operaciones de trading con nuestros robots!
            Deja tus datos en el formulario para más información.'
          />
          <Form />
        </section>
        <Footer />
      </body>
    </html>
  )
}
