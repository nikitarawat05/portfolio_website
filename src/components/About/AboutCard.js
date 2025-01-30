import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">Nikita Rawat</span> a final-year B.Tech student at Graphic Era Hill University, Dehradun. Originally from the scenic town of Haldwani, Nainital, I’m passionate about technology and innovation. From coding to machine learning, I love tackling challenges that push my limits and shape the future.
            <br />
            <br />
            In addition to coding, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing  sports like volleyball and badminton.
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Reading Books
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Listining Music
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Dancing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
