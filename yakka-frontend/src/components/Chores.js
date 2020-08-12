import React from 'react'

    const Chores = props => {
      const chores = props.chores.map((chore, i) => 
      <li key={i}> 
        {chore.name}
      </li>
      )

      return ( <div>{props.loading ? <h5>Loading.....</h5> : chores}</div> )
}

export default Chores