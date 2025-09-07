import React from 'react'
import styled from 'styled-components'
const Title = () => {
  return (
   <Title_holder>
   <div  className='Title_holder'>
     <h1>Here<span> for you</span></h1>
   </div>
   </Title_holder>
  )
}

export default Title

export const Title_holder = styled.div`
    .Title_holder{
     width: 87%;
    height: 50vh;
    display: flex;
    justify-self: center;
    justify-content: center;
    align-items: center;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;    
    h1{
        font-size: 70px;
        box-shadow: 1px 1px 1px 1px #cccbcb;
        padding: 25px;
        span{
            font-style: oblique;
            color: turquoise;
        }
    }
    }
    @media screen and (max-width:480px) {
        .Title_holder{
            width:95%;
            display: flex;
           justify-content: center;
           align-items : center ;
        }
    }
    @media screen and (min-width: 600px) and (max-width: 900px) {
       .Title_holder{
        width:83%;
        display: flex;
       justify-content: center;
       }
         
    }
`