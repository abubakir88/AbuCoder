import React, { useState } from "react";
import axios from "axios";
import "./Contact.scss";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const telegram_bot_id = "7394087223:AAGvXl5H49k1_1HiV89-FCKJTbEgRc-c7VY"; 
  const chat_id = "7045837199"; 

  const handleSubmit = (e) => {
    e.preventDefault();

 
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      toast.error("Iltimos, to'g'ri elektron pochta manzilini kiriting.");
      return;
    }

    const text = `Ismi: ${name}\nEmail: ${email}\nIzoh: ${message}`;

    axios
      .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
        chat_id: chat_id,
        text: text,
      })
      .then((response) => {
        toast.success("Xabar yuborildi");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
        toast.error("Xatolik yuz berdi");
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="contact" id="contact">
      <ToastContainer />
      <h1>Contact with me</h1>
      <div className="contacts">
        <a
          href="https://www.google.com/maps/place/Tashkent,+Uzbekistan/@41.2827379,69.1145564,11z/data=!3m1!4b1!4m15!1m8!3m7!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!2sTashkent,+Uzbekistan!3b1!8m2!3d41.2994958!4d69.2400734!16zL20vMGZzbXk!3m5!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!8m2!3d41.2994958!4d69.2400734!16zL20vMGZzbXk?entry=ttu"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLocationDot className="icon" />
          <h2>Address</h2>
          <p>Tashkent Uzbekistan</p>
        </a>
        <a href="tel:+998996308850">
          <FaPhone className="icon" />
          <h2>Phone</h2>
          <p>+998 (99) 630-88-50</p>
        </a>
        <a href="mailto:abubakirsaidxonov21@gmail.com" target="_blank">
          <MdEmail className="icon" />
          <h2>Email</h2>
          <p>Abubakir21@gmail.com</p>
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name or Company name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            // autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            onKeyPress={handleKeyPress}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
