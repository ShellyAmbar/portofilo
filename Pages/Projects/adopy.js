import React, { Component } from "react";

class Adopy extends Component {
  render() {
    return (
      <div>
        <h1>Adopy</h1>

        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="10000">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
export default Adopy;
