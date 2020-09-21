import React from "react";
import emailjs from "emailjs-com";
import "./styles.css";

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();
    console.log("Pocetak");
    // template_7jj4hmb
    emailjs
      .sendForm(
        "gmail",
        "template_7jj4hmb",
        e.target,
        "user_f6JoH4t15VmFTfmM0FhGN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    console.log("Kraj");
  }

  return (
    <form className="contact-us" onSubmit={sendEmail}>
      <div className="title">
        <h1>Contact us</h1>
      </div>
      <div className="form">
        <div className="form-items">
          <input type="text" className="input" name="subject" placeholder="Subject" />
        </div>
        <div className="form-items">
          <input type="text" className="input" name="name" placeholder="Username" />
        </div>
        <div className="form-items">
          <input type="text" className="input" name="email" placeholder="Email" />
        </div>
        <div className="form-items">
          <textarea
            className="input message"
            name="message"
            cols="30"
            rows="10"
            placeholder="Message....."
          ></textarea>
        </div>
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

{
  /* <form className="contact-form" onSubmit={sendEmail}>     
<label>Subject</label>
<input type="text" name="subject" />
<label>Name</label>
<input type="text" name="name" />
<label>Email</label>
<input type="email" name="email" />
<label>Message</label>
<textarea name="message" />
<input type="submit" value="Send" />
</form> */
}
