import React from "react"

const ContactForm = () => {
  return (

    <form className="mb-6">
      <div className="field-wrapper">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" />
      </div>
      <div className="field-wrapper">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Email address" />
      </div>
      <div className="field-wrapper">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="If we need to call you" />
      </div>
      <div className="field-wrapper">
        <label htmlFor="textarea">Message</label>
        <textarea rows="6" id="textarea" name="textarea" placeholder="Message..."></textarea>
      </div>
      <div className="field-wrapper">
        <button type="submit" className="btn btn-primary">Send message</button>
      </div>
    </form>
  )
}

export default ContactForm
