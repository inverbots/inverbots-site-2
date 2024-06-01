import style from './BannerLanding.module.css'
import VibrationBtn from '../vibration-btn/VibrationBtn'

export default function BannerLanding(props) {
  const { textCallToAction, url, video, background,title,description, logo  } = props

  return (
    <section className={style.hero} style={{ backgroundImage: `url(${props.background})` }}>
      <div className={style.hero__content}>
        <div className={style.info}>
          {logo ? <h3 class={style.logo_title}>INVERBOTS</h3> : ''}
          <h1 className={style.main_title}>{props.title}</h1>
          <div className={style.main_text_content} dangerouslySetInnerHTML={{ __html: props.description }} />
          <VibrationBtn
            className={style.main_btn}
            text={textCallToAction}
            url={url}
          />
        </div>
        <div className={style.video}>
          <div className={style.video__html} dangerouslySetInnerHTML={{ __html: video }} />
        </div>
      </div>
    </section>
  )
}
