import './error.css'
import { Link } from 'react-router-dom'

export default function Error(){
  return(
    <div className='container-error'>
      <lottie-player style={{width: "300px", height: "300px"}} src="https://assets10.lottiefiles.com/private_files/lf30_conoeouc.json"  background="transparent"  speed="1" loop  autoplay></lottie-player>
      <h1>Página não encontrada.</h1>
      <Link to="/">Voltar para página inicial</Link>
    </div>
  )
}