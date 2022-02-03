import "./meusLinks.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getLinkSave } from "../../services/storeLinks";
import LinkItem from '../../components/LinkItem'

export default function MeusLinks() {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinkSave("@encurtaLink");

      if (result.length === 0) {
        //nossa lista esta vazia.
      }
      setMyLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenLink(link){
    setData(link)
    setShowModal(true)
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

      {myLinks.map((link) => (
        <div key={link.id} className="links-item">
          <button className="link" onClick={ () => handleOpenLink(link) }>
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </button>
          <button className="link-delete">
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
