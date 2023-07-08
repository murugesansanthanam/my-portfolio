import { IconButton } from "@material-ui/core";
import React from "react";
import { LinkedIn, GitHub, Instagram } from "@material-ui/icons";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          E-mail : <span>murugesansanthanam123@gmail.com</span>
        </p>
        <p>
          Github Username : <span>murugesansanthanam</span>
        </p>
        <div className="contact__icons">
          <a href="https://github.com/murugesansanthanam">
            <IconButton>
              <GitHub></GitHub>
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/murugesan-santhanam1">
            <IconButton>
              <LinkedIn></LinkedIn>
            </IconButton>
          </a>
          <a href="https://www.instagram.com/murugesan_santhanam">
            <IconButton>
              <Instagram></Instagram>
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
