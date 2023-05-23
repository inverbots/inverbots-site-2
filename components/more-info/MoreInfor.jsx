import style from './MoreInfor.module.css'

export default function MoreInformation (prosp) {
  const data = prosp.data

  return (
    <div className={style.more_info_content}>
      <h2 className={style.title_section}> {data.titulo_de_seccion}</h2>
      <div className={style.contents_video}>
        {data.video_adicional.map((e, key) => {
          return (
            <div className={style.video_element} key={key}>
              <div dangerouslySetInnerHTML={{ __html: e.agregar_video }} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
