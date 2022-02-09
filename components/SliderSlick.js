import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
const SliderSlick = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef();
  const slider2 = useRef();

  // i dont seem to need this
  //useEffect(() => {
  //    setNav1(sliderEl1);
  //    setNav2(sliderEl2);
  //  }, []);

  return (
    <div style={{ padding: "0 30px", background: "#ccc" }}>
      

      <Slider
        asNavFor={nav1}
        ref={slider2 => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderSlick;