import React from 'react'

export default function Carousal() {
  return (
    <div>
        
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" style={{"height": "400px"}}>
    <div className="carousel-caption">
    <form class="form-inline d-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/?city,night" className="d-block w-100 h-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/?city,morning" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/?city,afternoon" className="d-block w-100" alt="..."/>
    </div>
  </div>
 <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>

    </div>
  )
}
