import * as React from "react"
import Layout from "../components/layout"

const About = ()=>{

return <Layout>
 <section className="about" id="about">
    <div className="text">
    <p>In my work I focus on the different appearances of decay and the associations surrounding it. I am looking for the ideal form of incompleteness as well as completeness within decay. The imagery of comics is timeless and universal therefore it provides me with a great range of freedom. By now I have a different perspective on comics. They present me with the ideal raw material for dealing with topics like fear, confusion, loss of identity and hero cults. In my work the world of the superheroes is upside down, balancing between chaos and order. </p>
     <button><a href="./contact.html">Contact Me</a></button>
    </div>
    <div className="image">
      <img src="./img/peti.jpg" alt="Peter Tauber" id="peti"/>
      <div className="card-text">
        <ul>
          <li>
            Born in Budapest 1983
          </li>
          <li>2010 -2017 study on the Academy of Fine arts
             Vienna in the class of Prof. Daniel Richter.</li>
             <li>Currently lives and works in Vienna, Austria.</li>
        </ul>
      </div>
    </div>
  </section>
  </Layout>
}

export default About
