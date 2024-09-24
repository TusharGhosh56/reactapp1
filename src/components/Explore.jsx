import React, { useState } from "react";
import '../css/Explore.css';
import Modal from './Modal'; // Import the modal component

const Explore = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const onShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="section__container explore__container">
      <div className="explore__header">
        <h2 className="section__header"><span>EXPLORE</span> OUR PROGRAM</h2>
      </div>
      <div className="explore__grid">
        <div className="explore__card" onClick={() => onShowModal('Embrace the essence of strength.')}>
          <span><i className="fas fa-dumbbell"></i></span>
          <h4>Strength</h4>
          <p>Embrace the essence of strength.</p>
        </div>
        <div className="explore__card" onClick={() => onShowModal('Improve health, strength, and flexibility.')}>
          <span><i className="fas fa-heartbeat"></i></span>
          <h4>Physical Fitness</h4>
          <p>Improve health, strength, and flexibility.</p>
        </div>
        <div className="explore__card" onClick={() => onShowModal('Reach your fat loss goals with expert guidance.')}>
          <span><i className="fas fa-fire"></i></span> {/* New icon for Fat Loss */}
          <h4>Fat Loss</h4>
          <p>Reach your fat loss goals with expert guidance.</p>
        </div>
        <div className="explore__card" onClick={() => onShowModal('Gain weight in a sustainable manner.')}>
          <span><i className="fas fa-weight"></i></span> {/* New icon for Weight Gain */}
          <h4>Weight Gain</h4>
          <p>Gain weight in a sustainable manner.</p>
        </div>
      </div>
      <Modal showModal={showModal} content={modalContent} onClose={onCloseModal} />
    </section>
  );
};

export default Explore;
