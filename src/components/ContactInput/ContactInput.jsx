import React from "react";
import "./ContactInput.scss";
import red_star from "../../assets/Contact/red-star.svg";
function ContactInput({ id, title, type, placeholder }) {
  return (
    <div className="form__control">
      <label htmlFor={id}>{title}<sup><img src={red_star} alt="star"/></sup></label>
      <input type={type} placeholder={placeholder} required id={id}/>
    </div>
  );
}

export default ContactInput;
