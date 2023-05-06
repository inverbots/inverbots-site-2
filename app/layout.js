import 'normalize.css'
import '../styles/globals.css'
import Header from '../components/header/Header'

export default function RootLayout ({ children }) {
  return (
    <html lang='en, es'>
      <head>
        <title>Inverbots | La mejor academia de trading con robots</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
