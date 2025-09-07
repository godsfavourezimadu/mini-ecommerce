import React from 'react'
import styled from 'styled-components'
const Header = () => {
  return (
    <div>
       <Header_holder >
        <Header_holder_wrapper>
           <div className='header_logo_holder'>
               <h1>Venko<span>Shopping</span></h1>
           </div>
             <ul>
              <li>Home</li>
              <li>Feature</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Pages</li>
              <li>Contact</li>
             </ul>
        </Header_holder_wrapper>
        </Header_holder> 

    </div>
  )
}

export default Header
export const Header_holder = styled.div `
    width: 100%;
    height: 13vh;
    background-color: #fcf6bc;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

 `;
export const Header_holder_wrapper = styled.div `
    width: 85%;
    height: 100%;
    background-color: #fcf6bc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .header_logo_holder{
      width: 40%;
      h1{
            color: turquoise;
            font-size: 40px;
            font-style: italic;
            span{
                color: #625ace;
            }
        }
    }
     ul{
      width: 60%;
       display: flex;
      justify-content: space-between;
       align-items: center;
      font-Family:  Poppins, sans-serif;
      li{
        font-Size:  19px;
        font-Style: normal;
        font-weight: 500;
       list-style: none;
       color: #625ace;
       cursor: pointer;
       padding: 20px 20px;
       margin-bottom: 10px;
     
        border-bottom: 2px solid transparent;
       
        
      }
      li:hover{
          border-bottom: 2px solid;
          
        }
     
     }
     @media screen and (max-width: 480px) {
      .header_logo_holder{
        width: 100%;
        display: flex;
        justify-content: center;
         h1{
         
            font-size: 60px;
       
        }
      }
        ul{
          display: none;
        }
     }
     @media screen and (min-width:600px) and (max-width:900px) {
       .header_logo_holder{
        width: 100%;
        display: flex;
         justify-content: center;
        h1{
          font-size: 70px;
        }
       }
       ul {
        display: none;
       
        
       }
     }
 `