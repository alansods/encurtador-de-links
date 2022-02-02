import './menu.css'
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Menu(){
  return(
    <div className='menu'>
      <a className='social' href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <AiFillYoutube color='#fff' size={28} />
      </a>
      <a className='social' href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <AiFillInstagram color='#fff' size={24} />
      </a>
      <Link className='menu-item' to={"/meus-links"}>Meus Links</Link>
    </div>
  )
}