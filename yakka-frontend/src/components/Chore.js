import React from 'react'
    
   export const Chore = ({chore}) => {
     const handleChange = event => {
       
     }
     return (
        <div className="card" >
            <div className="card-body">
              <h6 className="card-title">{chore.name}</h6>
              <ul>
                {chore.description}
              </ul>
              <ul>
                {chore.reward}
              </ul>
              
                <input type="checkbox" name="completed" value={chore.completed} onChange={handleChange}/>
            
                
            </div>
        </div>
     )
   }
    
     
  

