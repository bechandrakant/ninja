import React from 'react'

const Ninjas = ({ninjas, deleteNinja}) => {
  
  const ninjaList = ninjas.map(ninja => 
    <div key={ninja.id}>
      <h2>Name: {ninja.name}</h2>
      <p>Age: {ninja.age} Belt: {ninja.belt}</p>
      <button onClick={() => {deleteNinja(ninja.id)}}>X</button>
    </div>
  )

  return (
    <div>
      { ninjaList }
    </div>
  )
}

export default Ninjas;