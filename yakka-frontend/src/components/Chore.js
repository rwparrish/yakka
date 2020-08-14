import React from 'react'
    
   export const Chore = props => {
     return (
        <div className="card" >
            <div className="card-body">
              <h6 className="card-title">{props.chore.name}</h6>
              <ul>
                {props.chore.description}
                {props.chore.reward}
              </ul>
              <button id={props.chore.id} onClick={props.handleClick}>Delete this chore</button>
           </div>
        </div>
     )
   }
    
     
  

