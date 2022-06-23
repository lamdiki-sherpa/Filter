import React from 'react'
import { useState } from 'react'
import Dataa from './data.js'
import Single from './singleItem'
import Category from './category.js'


const App = () => {
  const[data,setData]=useState(Dataa);
  // const[category,setCategory]=useState([])
  const filterItems=(categories)=>{
    if(categories==='all'){
      setData(Dataa);
      return;
    }
  const newItem=Dataa.filter((item)=>
  item.category===categories)
  setData(newItem);
};
    

  return (
    <>
    < div className='mainSection'>
      <h1 style={{marginBottom:'20px'}}> Menu</h1>
      
      <Category filterItems={filterItems}/>
      
      <section className='menulist'>
        {data.map((information)=>{
          return <Single key={information.id} {...information}/>
        })}
      </section>
    </div>
    </>
  )
}

export default App