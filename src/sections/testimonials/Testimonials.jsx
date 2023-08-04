import testimonials from "./data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./testimonials.css";

// import required modules
import { Pagination } from "swiper/modules";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <p>These are unbiased testimonials from some of my known people</p>
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            0: {slidesPerView: 1},
            601: {slidesPerView: 2},
            1025: {slidesPerView: 3}
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
            {testimonials.map((testimonial)=>(
              <SwiperSlide key={testimonial.id}>
                <Testimonial testimonial={testimonial}/>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
