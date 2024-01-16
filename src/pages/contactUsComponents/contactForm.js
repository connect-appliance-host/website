import React, { useState } from "react";
import emailjs from 'emailjs-com';
import ContactModal from "./contactModal";

// modal messages
const sentMessage = "Thank you for reaching out! Your message has been successfully sent. We will attend to your message as soon as possible."
const invalidEmailMessage = "Invalid email format.";
const missingFieldsMessage = "Please fill out all the fields.";
const emailErrorMessage = "There was an error while sending your email, please try again."


function ContactForm() {
  const [modalMessage, setModalMessage] = useState(sentMessage);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  function openModal(message){
    setModalMessage(message);
    setModalOpen(true);
  }

  function closeModal(){
    setModalOpen(false);
  }

  // input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // input verification on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any input field is empty
    const isEmpty = Object.values(formData).some(value => value === '');

    // check for proper email
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailReg.test(formData.email);

    // check empty fields
    if (isEmpty) {
      openModal(missingFieldsMessage);
    
    // check valid email
    } else if(!validEmail) {
      openModal(invalidEmailMessage);

    // proceed
    } else {
      console.log('Form submitted:', formData);
      sendEmail(e);
    }
  };

  // send email to owner
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_7d6hwmn', 'template_mmkoolq', e.target, 'qGkgBUkkqo3MDqlkU')
      .then((result) => {
          const form = document.getElementById("email-form");
          form.reset();
          openModal(sentMessage);
      }, (error) => {
          console.log(error.text);
          openModal(emailErrorMessage);
      });
  }

  // styles
  const inputWrapperStyle = "relative py-4 ";
  const inputStyle = " outline-none text-xl py-2 border-b-2 border-darkBgLight w-full peer duration-200 " +
    " placeholder:text-clear placeholder-shown:" + 
    " focus:border-highlight ";
  const labelStyle = " absolute top-0 left-0 -translate-y-[50%] text-darkBg text-xl duration-200 " + 
    " peer-placeholder-shown:top-[50%] peer-focus:text-highlight";

  return (
    <>
      <div className=" max-w-[650px] m-auto p-10">
        <form onSubmit={handleSubmit} id="email-form">
          <div className=" flex flex-col ">
            <div className=" flex justify-between space-x-4">
              <div className={inputWrapperStyle + " flex-1 "}>
                <input name="name" placeholder="first name" className={inputStyle} onChange={handleInputChange}/>
                <label for="name" className={labelStyle}>Name</label>
              </div>
              <div className={inputWrapperStyle + " flex-1" }>
                <input name="subject" placeholder="subject" className={inputStyle}/>
                <label for="subject" className={labelStyle}>Subject</label>
              </div>
            </div>
            <div className={inputWrapperStyle}>
              <input name="email" placeholder="email" className={inputStyle} onChange={handleInputChange}/>
              <label for="email" className={labelStyle}>Return Email</label>
            </div>
            <div className={inputWrapperStyle}>
              <input name="message" placeholder="message" className={inputStyle} onChange={handleInputChange}/>
              <label for="message" className={labelStyle}>Message</label>
            </div>
            <button type="submit" className="p-4 bg-highlight w-32 text-highlightText">Send</button>
          </div>
        </form>
      </div>

      {/* modal */}
      {modalOpen && <ContactModal closeModal={closeModal} modalMessage={modalMessage}/>}
    </>
  );
}

export default ContactForm;