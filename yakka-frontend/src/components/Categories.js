import React from 'react'

    const Categories = props => {
      const categories = props.categories.map((cat, i) => 
      <ul key={i}> <div className="card" >
      <div className="card-body">
          <h5 className="card-title">{cat.name}</h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Add Chore</a>
          {/* <a href="#" className="card-link">Another link</a> */}
      </div>
      </div></ul>)
      return (
        <div>{props.loading ? <h5>Loading.....</h5> : categories}</div>
        )
}


export default Categories