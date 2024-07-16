import React, { useState } from "react";
import axios from "axios";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const telegram_bot_id = "7394087223:AAGvXl5H49k1_1HiV89-FCKJTbEgRc-c7VY"; // Bot tokenini kiriting
  const chat_id = "774179965"; // Chat ID ni kiriting

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Ismi: ${name}\nEmail: ${email}\nIzoh: ${message}`;

    axios
      .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
        chat_id: chat_id,
        text: text,
      })
      .then((response) => {
        alert("Xabar yuborildi");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
        alert("Xatolik yuz berdi");
      });
  };

  return (
    <div className="contact">
      <h2>Biz bilan bog'laning</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Ism:</label>
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Xabar:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Yuborish</button>
      </form>
    </div>
  );
};

export default Contact;
