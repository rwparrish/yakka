import react from 'react'

const Categories = props => {
      return props.categories.map((cat, i) => <li key={i}>{cat.name}</li>)
}