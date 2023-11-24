import React from "react";
import slider1 from "./slider1.jpeg";
import slider2 from "./slider2.jpeg";
import slider3 from "./slider3.jpeg";
function Slider() {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
        style={{ marginTop: "-270px", marginLeft: "900px" }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block "
              src={slider1}
              alt="First slide"
              style={{ width: "600px", height: "300px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block"
              src={slider2}
              alt="Second slide"
              style={{ width: "600px", height: "300px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block"
              src={slider3}
              alt="Third slide"
              style={{ width: "600px", height: "300px" }}
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Slider;
