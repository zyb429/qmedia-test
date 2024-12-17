import React from "react";
import Select from "react-select";
import "./contact.css";

const seminar = [
  { label: "Выбрать", value: "" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
];

const Dropdown = () => {
  return (
    <Select
      options={seminar}
      placeholder="Выберите семинар:"
      required
      name="seminar"
    />
  );
};

export default Dropdown;
