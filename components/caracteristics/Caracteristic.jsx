'use client'
import Accordion from '@mui/material/Accordion'
import style from './Caracteristics.module.css'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'

export default function caracteristics (props) {
  const data = props.data

  return (
    <ol className={style.content_accordion}>
      <h3 className={style.title_section}>CON NOSOTROS TENDRÁS</h3>
      {data.map((e, key) => {
        return (
          <Accordion key={key} className={style.accordion}>
            <AccordionSummary>
              <li className={style.text}>
                {e.titulo}
              </li>
            </AccordionSummary>
            {e.text_description &&
              (
                <AccordionDetails>
                  <div className={style.description} dangerouslySetInnerHTML={{ __html: e.text_description }} />
                </AccordionDetails>
              )}
          </Accordion>
        )
      })}
    </ol>
  )
}
