import "./link-item.css";
import { FiX, FiClipboard } from "react-icons/fi";

export default function LinkItem( {closeModal} ) {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link Encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#132742" />
        </button>
      </div>

      <span>https://sujeitoprogramador.com/aula-3/</span>

      <button className="modal-link">
        https://sujeitoprogramador.com/aula-3/
        <FiClipboard size={20} color="#fff" />
        </button>
    </div>
  );
}
