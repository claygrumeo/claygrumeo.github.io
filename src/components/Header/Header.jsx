import { ReactComponent as AnimatedSVG } from '../../layered-peaks-haikei.svg'
import './Header.css'
import NameCard from './NameCard'

export default function Header() {
  return (
    <div className='HeaderParent'>
      <NameCard name="Clay Grumieaux" title="Developer"/>
    </div>
  )
}