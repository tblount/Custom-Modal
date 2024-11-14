// src/components/Modal.js
import React, { useState } from 'react';
import '../styles.css';

const Modal = ({ isOpen, onClose }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSearch = async () => {
    // Placeholder for OpenAI API call
    try {
      // Example axios request
      // const response = await axios.post("https://api.openai.com/v1/your-endpoint", { prompt: inputText });
      // console.log(response.data);
      alert(`Searching for: ${inputText}`);
    } catch (error) {
      console.error('Error:', error);
    }
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
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  </div>
);
};

export default Modal;
