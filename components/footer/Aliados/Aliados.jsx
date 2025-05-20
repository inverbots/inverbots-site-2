import style from './aliados.module.css'
import Image from 'next/image'

function Aliados() {
  return (
    <div className={style.aliados}>
      <div className={style.aliados__content}>
        <h3 className={style.aliados__title}>Aliados</h3>
        <div className={style.aliados__logos}>
            <a href='https://ninjatrader.com/' target='_blank' rel="noreferrer">
                    <img 
                    className={style.aliados__logo_ninja} 
                    src="https://inverbots.xyz/wp-content/uploads/2024/01/NinjaTrader_Wordmark_c.webp" alt="Ninja trader e Inverbots" 
                    width={167} 
                    height={47} 
                />
            </a>
            <a href='https://kinetick.com/NinjaTrader' target='_blank' rel="noreferrer">
                <img 
                    className={style.aliados__logo_kinecktik} 
                    src="https://inverbots.xyz/wp-content/uploads/2024/01/7e0f4b_b6db5e01e0154a5590d70b2900471076mv2.webp" alt="Ninja trader e Inverbots" 
                    width={150} 
                    height={47} 
                />
            </a>    
        </div>
      </div>
    </div>    
  )
}

export default Aliados