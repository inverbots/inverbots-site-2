import Header from '@/components/header/Header'

export default function RootLayout ({ children }) {
  return (
    <html lang='en, es'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
