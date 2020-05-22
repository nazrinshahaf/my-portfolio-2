import React, { useState, useEffect } from "react";

const Contact = () => {
  const [nameText, setNameText] = useState("");
  const [emaiText, setEmaiText] = useState("");
  const [phoneText, setPhoneText] = useState("");
  const [messageText, setMessageText] = useState("");
  const [date, setDate] = useState("");
  const [focus, setFocus] = useState("name");

  useEffect(() => {
    const dateNow = new Date();
    setDate(dateNow.toDateString());
  }, [date]);

  const handleNameInput = (e) => {
    setNameText(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmaiText(e.target.value);
  };
  const handlePhoneInput = (e) => {
    setPhoneText(e.target.value);
  };
  const handleMessageInput = (e) => {
    setMessageText(e.target.value);
  };
  console.log(focus);
  return (
    <div className="contact-main-background" id="Contact">
      <div className="contact-form-section">
        <span className="contact-me-title">
          <span className="color-style-tags-solar">&lt;</span>
          <span className="color-style-tags-text-solar">h2</span>
          <span className="color-style-tags-solar"> &gt;</span>
          <h2>Contact Me</h2>
          <span className="color-style-tags-solar">&lt;/</span>
          <span className="color-style-tags-text-solar">h2</span>
          <span className="color-style-tags-solar"> &gt;</span>
        </span>
        <form>
          <div className="contact-name-container">
            <label for="contact-name">
              Name
              <input
                id="contact-name"
                name="contact-name"
                type="text"
                onChange={handleNameInput}
                onFocus={() => setFocus("name")}
              ></input>
            </label>
          </div>
          <div className="contact-info-container">
            <label for="contact-email">
              E-mail
              <input
                id="contact-email"
                name="contact-email"
                type="email"
                onChange={handleEmailInput}
                onFocus={() => setFocus("email")}
              ></input>
            </label>
            <label for="contact-phone">
              Phone number
              <input
                id="contact-phone"
                name="contact-phone"
                type="tel"
                onChange={handlePhoneInput}
                onFocus={() => setFocus("phone")}
              ></input>
            </label>
          </div>
          <label className="contact-area-text-label" for="contact-textarea">
            Message
            <textarea
              id="contact-textarea"
              name="contact-textarea"
              type="text"
              onChange={handleMessageInput}
              onFocus={() => setFocus("message")}
            ></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-display-window">
        <div className="contact-display-box">
          <div>
            Name: &#123;"{nameText}
            <span
              className="blinking-cursor-solar"
              style={focus === "name" ? { display: "" } : { display: "none" }}
            >
              .
            </span>
            "&#125;
          </div>
          <div>
            E-mail: &#123;"
            {emaiText}
            <span
              className="blinking-cursor-solar"
              style={focus === "email" ? { display: "" } : { display: "none" }}
            >
              .
            </span>
            "&#125;
          </div>
          <div>
            Phone number: &#123;"
            {phoneText}
            <span
              className="blinking-cursor-solar"
              style={focus === "phone" ? { display: "" } : { display: "none" }}
            >
              .
            </span>
            "&#125;
          </div>
          <br />
          <div>{date}.</div>
          <div>Nazrin Shah Adrian Fernandez.</div>
          <div>Cyberjaya, Selangor, 36000.</div>
          <br />
          <div>Dear Nazrin,</div>
          <br />
          <div>
            <span className="color-style-tags-solar">&lt;</span>
            <span className="color-style-tags-text-solar">p</span>
            <span className="color-style-tags-solar">&gt;</span>
            {messageText}
            <span
              className="blinking-cursor-solar"
              style={
                focus === "message" ? { display: "" } : { display: "none" }
              }
            >
              .
            </span>
            <span className="color-style-tags-solar">&lt;/</span>
            <span className="color-style-tags-text-solar">p</span>
            <span className="color-style-tags-solar">&gt;</span>
            <div style={{ marginTop: "10px" }}>Yours truly,</div>
            <div>{nameText}.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
