import React, { useState } from "react";
import { fetchChatHistory } from "../utils/api";
import "../styles.css";

const Modal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    const response = await fetchChatHistory(query);
    setResult(response);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Search for Past Chats</h2>
        <input
          type="text"
          placeholder="Enter keywords..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
        {result && <div className="chat-result">{result}</div>}
      </div>
    </div>
  );
};

export default Modal;
