import Link from 'next/link'
import style from './Vibraction.module.css'

export default function VibrationBtn (props) {
  const borderType = props.border === 'radius' ? 'border_radius' : ''

  return (
    <Link className={`${style.anchor} ${borderType}`} href={props.url}>{props.text}</Link>
  )
}
