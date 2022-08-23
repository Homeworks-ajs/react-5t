import React from 'react'

function Card(props) {
  return (
    <div className="card w-25">
      <img src="https://img3.akspic.ru/previews/8/3/3/8/6/168338/168338-nyujork-ulice_nyu_jorka-ulica-manhetten-zdanie-500x.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          {props.children}
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default Card
