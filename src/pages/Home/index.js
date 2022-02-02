import { FiLink } from 'react-icons/fi'
import './home.css'

export default function Home() {
  return (
    <div className="container-home">

      <div className="logo">
      <lottie-player style={{width: "220px", "border-radius": "50%", background: "#fff", padding: "15px", "margin-bottom": "15px"}} src="https://assets8.lottiefiles.com/packages/lf20_fzpss2yc.json"  background="transparent" speed="1" loop  autoplay></lottie-player>
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