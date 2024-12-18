import React, { useRef } from "react";
import "./contact.css";
import Dropdown from "./dropdown";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0foiciq", "template_jiyzq1x", form.current, {
        publicKey: "MeKD6BRrywSVZBC1I",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className={"contact"}>
      <form onSubmit={sendEmail} ref={form}>
        <h2>Отправить заявку на участие в семинаре</h2>
        <p>Организаторы свяжутся с вами для подтверждения записи.</p>
        <p>
          Участие в семинаре <u>бесплатное</u>.
        </p>
        <div className={"input-box"}>
          <h1>Ваше имя:</h1>
          <input
            type="text"
            className="field"
            placeholder="Иванов Алексей"
            name="name"
            pattern="^[A-Za-zА-Яа-яЁё\s]+$"
            required
          />
        </div>
        <div className={"input-box"}>
          <h1>Контактный email:</h1>
          <input
            type="email"
            className="field"
            placeholder="example@example.com"
            name="email"
            required
          />
        </div>
        <br />
        <div classname={"chooser"}>
          <h1>Интересующий семинар:</h1>
          <Dropdown />
        </div>
        <div className="terms">
          <div className="terms-flex">
            <p>Все поля обязательны для заполнения.</p>
            <p>
              Отправляя заявку, вы соглашаетесь с договором публичной оферты и
              политикой обработки данных.
            </p>
          </div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </section>
  );
};
export default Contact;
