import style from './Footer.module.css'
import TextCallAction from '../text-call-to-action/TextCallAction'
import Form from '../form/Form'

export default function Footer () {
  return (
    <>  
      <section className='content_form'>
        <TextCallAction
          firstTitle='Comienza ya con'
          secondTitle='robots de trading'
          description='¡Optimiza tus operaciones de trading con nuestros robots!
          Deja tus datos en el formulario para más información.'
        />
        <Form />
      </section>
      <footer className={style.content}>
      <p className={style.paragraph}>Exoneración de responsabilidad: Existe riesgo de pérdidas substanciales en los mercados financieros. Utilice solo dinero cuyas pérdidas pueda costear sin poner en juego su seguridad financiera y estilo de vida. Los testimonios que aparecen en Inverbots.com podrían no ser representativos de la experiencia de otros clientes y no es garantía de resultados o éxito futuros. Resultados hipotéticos de rendimiento pueden tener muchas limitaciones inherentes. Nada en esta página es una recomendación para comprar o vender activos en los mercados. Toda la información ha sido obtenida de fuentes consideradas confiables, sin embargo, la precisión de la misma no puede ser asegurada. Inverbots no asume responsabilidades por el resultado de transacciones particulares.</p>
      </footer>
    </>
  )
}
