import React from 'react'

const Category = ({filterItems}) => {

  return<div className='buttons'>
    <button onClick={()=>filterItems('all')}>All</button>
    <button onClick={()=>filterItems('breakfast')}>Breakfast</button>
    <button onClick={()=>filterItems('lunch')}>Lunch</button>
    <button onClick={()=>filterItems('Dessert')}>Dessert</button>
    </div>

}

export default Category;