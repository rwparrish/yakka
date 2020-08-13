    import React from 'react'
    import { Chore } from './Chore'
    

    export const Category = props => 
      <div className="card" >
          <div className="card-body">
            <h5 className="card-title">{props.cat.name}</h5>
            <p className="card-text"> {props.cat.chores.map((chore, i) => <Chore key={i} chore={chore}/> )} </p>
          </div>
      </div>

  
     



// this is what category returns based on props