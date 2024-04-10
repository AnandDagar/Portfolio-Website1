import React from "react";

export default function Card() {
  return (
    <div style={{"display":"inline-block"}}>
      <div className="card mt-5" style={{ "width": "18rem", "maxHeight": "390px", "margin": "0 12px" }}>
        <img src="https://source.unsplash.com/random/900×700/?fruit " className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is Important Text.</p>
          <div className="container  d-inline">
            <select className="mt-2 h-100 bg-success rounded-1" name="" id="">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select name="" id="" className="ml-2 h-100 bg-success rounded-5">
              <option value="half">Half</option>
              <option value="half">Full</option>
            </select>
          </div>
          <div className="d-inline fs-5 fw-2">Total Price</div>
        </div>
      </div>
    </div>
  );
}
