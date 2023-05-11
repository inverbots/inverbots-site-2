
import style from './style.module.css'

export default function TextCallAction (props) {
  return (
    <div className={style.form_text}>
      <div className={style.form_content}>
        <h2 className={style.form_title}>{props.firstTitle}</h2>
        <h2 className={style.form_title}>{props.secondTitle}</h2>
        <p className={style.from_description}>{props.description}</p>
      </div>
    </div>
  )
}
