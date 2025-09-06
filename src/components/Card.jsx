import React from 'react'
import {Card_holder,Card_holder_wrapper} from './CardStyle'
 import { useState,useEffect } from 'react'

const Card = () => {
 const [product, setProduct] = useState([])
 
 
     useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(resp => resp.json())
        .then((data)=>{
        setProduct(data)
        console.log(data)
        }) .catch((err)=>{
            console.log(err)
           
        })
         
     },[])


   
  
  return (
    <Card_holder>
        <Card_holder_wrapper className='cardholder'>
            {
                product.map((items)=>
                
              <div className='card' key={items.id}>
                  <img src={items.image}alt="" />
                   <h3>{items.title}</h3> 
                  <p>rate:{items.rating.rate}</p>
                  <p>${items.price}</p>
                  <button>ADD TO CART </button>
               </div>  
                )
            }
          

        </Card_holder_wrapper>
    </Card_holder>
  )
}

export default Card