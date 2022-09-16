import React from "react";

export default function Home() {
  return (
    <div className="hero">
      <div class="card text-bg-dark text-white border-0">
        <img
          src="assets/bg.jpg"
          class="card-img"
          alt="Background image"
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container text-dark">
            <h5 class="card-title display-3 mb-0 fw-bolder">SHOPPING MADE EASIER!</h5>
            <p class="card-text lead fs-2">
              HAVE FUN SHOPPING HERE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
