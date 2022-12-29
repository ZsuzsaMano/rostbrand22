import * as React from "react"
import Layout from "../components/layout"


const Contact = ()=>{

return <Layout>
  <section className="contact">
    <div className="text">
  <form action="https://formspree.io/myynvoaj" method="POST">
      <div className="form-name">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required/>
      </div>
      <div className="form-email">
      <label for="email">Email</label>
      <input type="email" id="email" name="name" required/>
      </div>
      <div className="message">
      <label for="message">Message</label>
      <textarea name="message" id="message" required></textarea>
      </div>
      <input type="submit" className="submit" value="SEND"/>
    </form>
    <span>or</span>
<p className="email">  info@petertauber.at</p>
      </div>
      <div className="image">
        <img src="./img/contact.jpg" alt="Tauber Peter"/>
      </div>
  </section>
  </Layout>
}

export default Contact
