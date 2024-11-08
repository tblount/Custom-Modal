// src/pages/Home.js
import React, { useState } from 'react';
import Modal from '../components/Modal';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Home;
