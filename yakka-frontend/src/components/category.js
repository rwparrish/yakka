    import React from 'react'
    
    export const Category = props => 
    <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{props.cat.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Add Chore</a>
        </div>
    </div>
     



// this is what category returns based on props