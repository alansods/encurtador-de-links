import { FiLink } from 'react-icons/fi'
import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'
import { useState } from 'react'
import './home.css'
import api from '../../services/api'

export default function Home() {
  const [link, setLink] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState({})

  async function encurtarLink(){
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)
      setLink('')

    }catch{
      alert('Ops...parece que esse link é inválido!')
      setLink('')
    }
  }

  return (
    <div className="container-home">

      <div className="logo">
      <lottie-player style={{width: "220px", height: "220px", "border-radius": "50%", background: "#fff", padding: "15px", "margin-bottom": "15px"}} src="https://assets8.lottiefiles.com/packages/lf20_fzpss2yc.json"  background="transparent" speed="1" loop  autoplay></lottie-player>
        <h1>Encurtador de Links</h1>
        {/* <span>Cole seu link aqui 👇</span> */}
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color='#fff' />
          <input
          value={link}
          onChange={(e) => setLink(e.target.value) }
          onKeyPress={(e) => e.key === 'Enter' && encurtarLink()}
          placeholder='Cole seu link aqui...' />
        </div>
        <button onClick={encurtarLink}>Encurtar Link</button>
      </div>
      
      <Menu className="menu" />

      { showModal && (
        <LinkItem
        closeModal={() => setShowModal(false)}
        content={data}
        />
      ) }

    </div>
  );
}