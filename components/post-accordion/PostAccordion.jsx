'use client'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import style from './postaccordion.module.css'

export default function PostAccordion (props) {
  console.log(props.data)
  return (
    <div className={style.content}>
      {props.data.map((faq, key) => {
        return (
          <Accordion className={style.accordion} key={key}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <h3 className={style.accordion__title}>{faq.title}</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>{faq.excerpt}</p>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}
