import 'normalize.css'
import '../styles/globals.css'
import style from './page.module.css'
import Header from '../components/header/Header'
import Form from '@/components/form/Form'
import Footer from '@/components/footer/Footer'

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
          <div className={style.form_text}>
            <div className={style.form_content}>
              <h2 className={style.form_title}>Comienza ya con</h2>
              <h2 className={style.form_title}>robots de trading</h2>
              <p className={style.from_description}>¡Optimiza tus operaciones de trading con nuestros robots! Deja tus datos en el formulario para más información. </p>
            </div>
          </div>
          <Form />
        </section>
        <Footer />
      </body>
    </html>
  )
}
