import style from './BannerLanding.module.css'
import VibrationBtn from '../vibration-btn/VibrationBtn'

export default function BannerLanding (props) {
  return (
    <section className={style.hero} style={{ backgroundImage: `url(${props.background})` }}>
      <div className={style.hero__content}>
        <div className={style.info}>
          <h1 className={style.main_title}>{props.title}</h1>
          <div className={style.main_text_content} dangerouslySetInnerHTML={{ __html: props.description }} />
          <VibrationBtn
            className={style.main_btn}
            text={props.textCallToAction}
            url={props.url}
          />
        </div>
        <div className={style.video}>
          <div dangerouslySetInnerHTML={{ __html: props.video }} />
        </div>
      </div>
    </section>
  )
}
