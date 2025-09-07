import styled from "styled-components";

export const FooterHolder = styled.div`
  width  : 100% ;
  height: 100%;
  justify-content: center;
  display: flex;
  background-color: white;
  margin-top: 50px;

`
export const FooterHolder_wrapper = styled.div`
  width  : 85% ;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-Family:  Poppins, sans-serif;
  background-color: inherit;
  gap: 60px;
    
  .Footer_holder{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
     background-color: inherit;
    .logo_p{
         background-color: inherit;
        h1{
            color: turquoise;
            font-size: 40px;
            font-style: italic;
            span{
                color: #625aceee;
            }
        }
      
    }
    footer{
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 25%;
         background-color: inherit;
         .input_icon{
           display: flex;
           align-items: center;
           background-color: inherit;
            input{
                border: none;
                 padding: 13px ;
                 width: 200px;
                 background-color: #F9F9FE;
                 font-size: 16px;
                 font-weight: 400;
                 outline: none;
                  
            }
            .icon{
                background-color:#8F1BDC ;
                padding: 11px 20px 11px 20px;
                color: white;
                font-size: 16px;
                cursor: pointer;
            }
         }
    }
    p{
        color: #707b8e;
         background-color: inherit;
         
         
    }
    h4{
         background-color: inherit;
         letter-spacing: 1px;
         font-size: 18px;
    }
  

  }
  .footer_copy_reserve{
    margin-bottom: 50px;
    background-color: inherit;
    
    p{
       background-color: inherit; 
       span{
        color: #F9258F;
          background-color: inherit;
       } 
       span:hover{
        color: #8F1BDC;
        cursor: pointer;
       }
    }
  }
  @media screen and (max-width:480px){
     .Footer_holder{
      display: flex;
      flex-direction: column;
    }
     
  }
  @media screen and (min-width:600px) and (max-width:900px){
     .Footer_holder{
      display: flex;
      flex-direction: column;
          .logo_p h1{
            font-size: 50px;
          }
      footer{
        h4{
          font-size: 40px;
         }
        p{
            font-size: 30px;
        }
        .input_icon{
          input{
              
                 padding: 20px ;
                font-size: 30px;
             }
              .icon{
                background-color:#8F1BDC ;
                padding: 11px 40px 11px 40px;
                font-size: 20px;
                cursor: pointer;
            }
        }
      }
      
     }
      .footer_copy_reserve{
      p {
          font-size: 30px;
      }
    }
     
    }
   
  
`