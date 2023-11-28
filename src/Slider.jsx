import React from 'react';
import './web.css';
function Slider() {
  return (
    <>
      <head>
        {/* Meta tags */}
        {/* Stylesheets */}
        {/* Favicon */}
        {/* Scripts */}
        <title>Code warriors</title>
      </head>
      <body>
        <main>
          <div className="title">Contact us</div>
          <div className="title-info">We'll get back to you soon!</div>

          <form action="" method="" className="form">
            <div className="input-group">
              <input type="text" name="first_name" id="first-name" placeholder="First name" />
              <label htmlFor="first-name">First name</label>
            </div>

            <div className="input-group">
              <input type="text" name="last_name" id="last-name" placeholder="Last Name" />
              <label htmlFor="last-name">Last name</label>
            </div>

            <div className="input-group">
              <input type="email" name="e-mail" id="e-mail" placeholder="e-mail" />
              <label htmlFor="e-mail">e-mail</label>
            </div>

            <div className="textarea-group">
              <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
              <label htmlFor="message">Message</label>
            </div>

            <div className="button-div">
              <button type="submit">Send</button>
            </div>
          </form>
        </main>

        <footer>
          <a href="#" target="_blank"><img className="social-media-img" src="./src/images/facebook.svg" alt="Facebook" /></a>
          <a href="#" target="_blank"><img className="social-media-img" src="./src/images/github.svg" alt="GitHub" /></a>
          <a href="#" target="_blank"><img className="social-media-img" src="./src/images/instagram.svg" alt="Instagram" /></a>
  
          <a href="#"><img className="codecell-img" src="./static/img/codecell_logo.svg" alt="Code-Warriors" /></a>
  
          <a href="#" target="_blank"><img className="social-media-img" src="./src/images/linkedin.svg" alt="LinkedIn" /></a>
          <a href="#" target="_blank"><img className="social-media-img" src="./src/images/twitter.svg" alt="Twitter" /></a>
          <a href="#" target="_blank"><img className="social-media-img" src="./src/images/youtube.svg" alt="YouTube" /></a>
        </footer>
      </body>
    </>
  );
}

export default Slider;