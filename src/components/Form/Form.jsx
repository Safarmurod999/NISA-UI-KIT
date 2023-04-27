import React from "react";

import Button from "../../components/Button";
import "./Form.scss";

export default function Form() {
  return (
    <>
      <div className="form">
        <div className="form__box">
          <div className="form__description">
            <h2>Discover the power of creative freedom with Align.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              consectetur egestas mauris adipiscing dui.{" "}
            </p>
          </div>

          <form action="">
            <input placeholder="Your Name" />
            <input placeholder="Email Addres" />
            <div className="btn-box">
              <Button title="Submit" variant="degree" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
