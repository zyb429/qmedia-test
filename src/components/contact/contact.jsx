import React from "react";
import "./contact.css";
import Dropdown from "./dropdown";
import Swal from "sweetalert2";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "150fcf14-f104-46aa-967c-a50bf9a0b302");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Ваша заявка успешно отправлена и находится в обработке. Ожидайте email с подтверждением бронирования.",
        icon: "success",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className={"contact"}>
      <form onSubmit={onSubmit}>
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
          <Dropdown name="seminar" />
        </div>
        <div className="terms">
          <div className="terms-flex">
            <p>Все поля обязательны для заполнения.</p>
            <p>
              Отправляя заявку, вы соглашаетесь с договором публичной оферты и
              политикой обработки данных.
            </p>
          </div>
          <button type={"submit"}>Отправить</button>
        </div>
      </form>
    </section>
  );
};
export default Contact;
