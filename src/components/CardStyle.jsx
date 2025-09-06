import styled from "styled-components";

export const Card_holder = styled.div `
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
 
`
export const Card_holder_wrapper = styled.div `
     width: 95%;
     height: 100%;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     gap :10px;
     .card{
        width: 20%;
        height: 60vh;
       box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
       
        gap: 5px;
        margin-bottom: 10px;
        border-radius: 10px;
        h3{
            height: 80px;
           
              margin: 0%;
              font-size: 13px;
        }
        img{
            width: 100%;
            height: 200px;
        }
        P{
          margin: 2px;
        }
        button{
         background-color : blue;
         border: none;
         padding: 5px;
         border-radius: 5px;
         color: white;
        }
     }
     @media screen and (max-width: 480px) {
        .card{
            display: flex;
            flex-direction: column;
            width: 100%;
            

         };
         
     };
     @media  (min-width: 600px) and (max-width:900px){
          .card{
            display: flex;
             flex-wrap: wrap;
              text-align: center;
             width: 300px;
             align-items: center;
             justify-content: space-between;
             h3{
                font-size: 25px;
               margin-bottom: 20px
             }
             p{
                font-size: 35px;
                
             }
             
             button{
                padding: 20px;
                color: white;
                font-size: 20px;
             }
         }
     }
 
`
