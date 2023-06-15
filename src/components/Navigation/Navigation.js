import React, { useState } from 'react'
import { menuItems } from '../../utils/menuItems';
import styled from 'styled-components';
import { signout } from '../../utils/icon';
import avatar from '../../img/avatar.jpg'
import { useGlobalContext } from '../../Context/useContext';




function Navigation({active,setActive}) {

    const {logindata} = useGlobalContext()
  
  return (
    <NavStyled>
        <div className='user-con'>
            <img src= {avatar} alt=''/>
            <div className='text'>
                <h2>{logindata ? logindata.ValidUserOne.email.slice(0,6) : ""}</h2>
                <p>Your Money</p>

            {
                /*

                  {
                
                data ? <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src="./man.png" style={{ width: "200px", marginTop: 20 }} alt="" />
                    <h1>User Email:{logindata ? logindata.ValidUserOne.email : ""}</h1>
                </div> : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    Loading... &nbsp;
                    <CircularProgress />
                </Box>    
            }

                */
            }
            </div>
        </div>
        <ul className='menu-items'>
            {menuItems.map((item)=>{
                return <li  key ={item.id}
                      onClick={()=>setActive(item.id)}
                      className={active ===item.id ? 'active':''}
                >
                    {item.icon}
                    <span>{item.title}</span>
                    
                </li>
            })}
        </ul>
      
    </NavStyled>
  )
}

const NavStyled = styled.nav`
padding: 2rem 1.5rem;
width: 374px;
height: 100%;
background: rgba(252, 246, 249, 0.78);
border: 3px solid #FFFFFF;
backdrop-filter: blur(4.5px);
border-radius: 32px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 2rem;
@media screen and (max-width:720px){
    flex-direction:row;
    position:relative;
    right:50px;
    bottom:70px;
    width:80px;
    scale:0.8;
    height:720px;
     
}
@media screen and(min-width:720px) and (max-width:1024px){
    position:relative;
    right:50px;
    width:200px;    
}

.user-con{
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        background: #fcf6f9;
        border: 2px solid #FFFFFF;
        padding: .2rem;
        box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2{
        color: rgba(34, 34, 96, 1);
    }
    p{
        color: rgba(34, 34, 96, .6);
    }
    @media screen and (max-width:720px){
       display:none;
         
    }
    @media screen and (max-width:1024px){
      scale:0.7;
      position:relative;
      right:10px;
          
     }


  
}

.menu-items{
    flex: 1;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:720px){
      span{
        display:none;
      }
         
    }
    
    li{
        display: grid;
        grid-template-columns: 40px auto;
        align-items: center;
        margin: .6rem 0;
        font-weight: 500;
        cursor: pointer;
        transition: all .4s ease-in-out;
        color: rgba(34, 34, 96, .6);
        padding-left: 1rem;
        position: relative;

        
        i{
            color: rgba(34, 34, 96, 0.6);
            font-size: 1.4rem;
            transition: all .4s ease-in-out;
        }
        
    }
}.active{
    color: rgba(34, 34, 96, 1) !important;
    i{
        color: rgba(34, 34, 96, 1) !important;
    }
    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background: #222260;
        border-radius: 0 10px 10px 0;
    }

    @media screen and (max-width:720px){
        flex-direction:column;
        width:100%;
   
    }
`;


export default Navigation