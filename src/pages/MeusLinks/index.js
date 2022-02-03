import "./meusLinks.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { deleteLink, getLinkSave } from "../../services/storeLinks";
import LinkItem from '../../components/LinkItem'

export default function MeusLinks() {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [EmptyList, setEmptyList] = useState(false)
  const delay = 100

  useEffect(() => {
    async function getLinks() {
      const result = await getLinkSave("@encurtaLink");

      if (result.length === 0) {
        //nossa lista esta vazia.
        setEmptyList(true)
      }
      setMyLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenLink(link){
    setData(link)
    setShowModal(true)
  }

  async function handleDelete(id){
    const result = await deleteLink(myLinks, id)

    if (result.length === 0){
      console.log("nao tem mais links")
      setEmptyList(true)
    }
    setMyLinks(result)
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to={"/"}>
          <div className="voltar">
            <FiArrowLeft size={28} color="#132742" />
          </div>
        </Link>
        <h1>Meus Links</h1>
      </div>

      { EmptyList && (
        <div>
          <lottie-player src="https://assets10.lottiefiles.com/temp/lf20_Celp8h.json"  background="transparent"  speed="1"  style={{width: "330px", height: "330px", margin: "0 auto"}} loop autoplay></lottie-player>
          <h2 className="empty-text">Lista de links vazia.</h2>
        </div>
      ) }

      {myLinks.map((link, i) => (
        <div key={link.id} className="links-item" style={{animationDelay: `${delay * i}ms`}}>
          <button className="link" onClick={ () => handleOpenLink(link) }>
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </button>
          <button className="link-delete" onClick={() => handleDelete(link.id)}>
            <FiTrash size={24} color="#ff5454" />
          </button>
        </div>
      ))}

      { showModal && (
        <LinkItem
        closeModal={ ()=> setShowModal(false) }
        content={data}
        />
      )}
    </div>
  );
}
