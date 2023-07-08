'use client'
import { useEffect } from "react";

export default function MailChimpForm({email, name, autoSubmit}){

  useEffect(() => {
    if (autoSubmit) {
      const sendForm = document.getElementById("mc-embedded-subscribe");
      sendForm.click();
    }
  }, [autoSubmit]);
  
  return (
    <div id="mc_embed_shell">
    <div id="mc_embed_signup">
      <form
        action="https://Inverbots.us19.list-manage.com/subscribe/post?u=0244fb5a09c74b3b464ac5f2f&amp;id=2b71f672a6&amp;f_id=004f8ce0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_self"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Correo electrónico <span className="asterisk">*</span></label>
            <input
              type="email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              required
              value={email}
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">Nombre</label>
              <input
                type="text"
                name="FNAME"
                className="text"
                id="mce-FNAME"
                value={name}
              />
          </div>
          <div id="mce-responses" className="clearfalse">
              <div
                id="mce-error-response"
                className="response"
                style={{ display: 'none' }}>  
              </div>
              <div
                id="mce-success-response"
                className="response"
                style={{ display: 'none' }}>
              </div>
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input
                type="text"
                name="b_0244fb5a09c74b3b464ac5f2f_e269145051"
                tabIndex="-1"
                value />
          </div>
          <div className="clear">
            <input
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
              value="Subscribe"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  )
};

