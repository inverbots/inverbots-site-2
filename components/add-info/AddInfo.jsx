import style from './AddInfo.module.css'
import Image from 'next/image'

export default function Addinfo (props) {
  const data = props.data

  return (
    <div className={style.container}>
      {data.map((e, key) => {
        const reverse = key % 2 !== 0 ? style.flex_reverse : ''
        return (
          <div className={`${style.contents} ${reverse}`} key={key}>
            <div className={style.left_column}>
              <div className={style.card_content}>
                <h4 className={style.titulo_card}>{e.titulo_del_texto}</h4>
                <p className={style.content_text}>{e.descripcion}</p>
              </div>
            </div>
            <div className={style.rigth_column}>
              <Image
                className={style.img_element}
                src={e.imagen_relacionada}
                alt={e.titulo_del_texto}
                width={450}
                height={450}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
