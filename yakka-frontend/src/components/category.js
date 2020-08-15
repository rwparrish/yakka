    import React from 'react'
    import { Link } from 'react-router-dom'
    
    export const Category = props => 
      <div className="card" >
          <div className="card-body">
            <h5 className="card-title">{props.cat.name}</h5>
            <Link to={`/categories/${props.cat.id}`}>View chores in the category</Link>
          </div>
      </div>
