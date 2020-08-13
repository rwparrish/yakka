import React from 'react'
    
   export const Chore = ({chore}) => {
     if (chore) {
     return (
        <div className="card" >
            <div className="card-body">
              <h5 className="card-title">{chore.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <a href="#" className="card-link">Add Chore</a> */}
            </div>
        </div>
      )
     } else {
        return <div>Loading...</div>
     }
   }

