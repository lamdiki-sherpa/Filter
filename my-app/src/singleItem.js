import React from 'react'
// import img from './images/image1.jpg'
const Single = ({menuTitle,price,info,img}) => {
  return (<>
  <article className=' articleSection'>
  <div className="card" style={{width: '18rem'}}>
  <img src={img} class="card-img-top" alt="" style={{height:'60%'}}/>
  <div className="card-body">
    <h4 style={{width:'100%'}}>{menuTitle}</h4>
    <h5>{price}</h5>
     {/* <p class="card-text">{info}</p> */}
  </div>
</div>
</article>
    </>
  )
}

export default Single;