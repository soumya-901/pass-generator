"use client";
import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component
import "./FAQ.css";

const FAQ = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    question: "",
    answer: "",
  });

  // Sample FAQ data
  const questions = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
  ];

  // Function to handle question click
  const handleQuestionClick = (question) => {
    setModalContent(question);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="faq-container">
      <h1 className="p-4 text-4xl sm:text-6xl font-bold">
        Got questions? We’ve got you covered!
      </h1>
      <div>
        {questions.map((qa, index) => (
          <div key={index} className="faq-item">
            <div className="question" onClick={() => handleQuestionClick(qa)}>
              {qa.question}
            </div>
          </div>
        ))}
        {showModal && (
          <Modal
            question={modalContent.question}
            answer={modalContent.answer}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default FAQ;
