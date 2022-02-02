import { FiLink } from 'react-icons/fi'
import './home.css'

export default function Home() {
  return (
    <div className="container-home">

      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <h1>Encurtador de Links</h1>
        <span>Cole seu link aqui 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color='#fff' />
          <input placeholder='Cole seu link aqui...' />
        </div>
        <button>Encurtar Link</button>
      </div>

    </div>
  );
}