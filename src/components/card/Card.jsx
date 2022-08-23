import React from 'react'

function Card({children, src}) {
  return (
    <div className="card w-25">
      <img src={src} className="card-img-top" alt="..." />
        <div className="card-body">
          {children}
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default Card
