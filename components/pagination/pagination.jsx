'use client'
import style from './pagination.module.css'
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

export default function Pagination() {
  return (
    <div className={style.pagination}>
      <ul className={style.pagination__content}>
        <li className={style.pagination__single}>
          <KeyboardTabIcon className={style.icon_previous} />        
          Pagina Página anterior
        </li>
        <li className={style.pagination__single}>
          Página siguiente
          <KeyboardTabIcon className={style.icon_next} />
        </li>
      </ul>
    </div>
  )
}
