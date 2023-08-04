import React from "react";
import Card from "../../components/Card";

const Testimonial = ({ testimonial }) => {
  return (
    <Card>
      <p>{testimonial.quote}</p>
      <div className="testimonial-client">
        <div className="testimonial-client-avatar">
          <img src={testimonial.avatar} alt="" className="img"/>
        </div>
        <div className="testimonial-client-details">
          <h6>{testimonial.name}</h6>
          <small>{testimonial.profession}</small>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
