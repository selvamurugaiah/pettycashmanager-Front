import React, { useContext, useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import bg from '../../img/avatar.jpg'
import Orb from '../Orb/orb';
import Navigation from '../Navigation/Navigation';
import  { useMemo } from 'react';
import Dashboard from '../Dashboard/dashboard';
import Expenses from '..//Expenses/expenses';
import Incomes from '../Incomes/incomes';
import { useGlobalContext } from '../../Context/useContext';
import { MainLayout } from '../../styles/Loyout';

const DashboardLogin = () => {

    const { logindata, setLoginData } = useGlobalContext()

    const [data, setData] = useState(false);

    const [active,setActive] = React.useState(1)

    const [rotate, setRotate] = useState(false)


 const displayData =()=>{
     switch(active){
       case 1:
         return <Dashboard/>
       case 2:
         return <Dashboard/>
       case 3:
         return <Incomes/> 
       case 4:
         return <Expenses/>
       default:
         return <Dashboard/>     
     }
 }

 const memo = useMemo(()=>{
   return <Orb/>
 },[])


    const history = useNavigate();

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("https://password-reset-11vu.onrender.com/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();

        if (data.status == 401 || !data) {
            history("*");
        } else {
            console.log("user verify");
            setLoginData(data)
            history("/dash");
        }
    }


    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true)
        }, 2000)

    }, [])

    rotate ?document.body.style.overflow ="hidden":document.body.style.overflow ="auto"

    return (
        <AppStyled bg= {bg} className='App'>
          
                 {memo}
        <MainLayout>
         <Navigation active={active} setActive={setActive}/>
         <main>
           {displayData()}
         </main>
        </MainLayout>

    </AppStyled>  

        

    )
}


const AppStyled = styled.div`
    height:100vh;
    background-image: url(${props => props.bg})
    position: relative;
    main{
      flex:1;
      background:rgba(252,246,249,0.78);
      border:3px solid #FFFFFF;
      backdrop-filter:blur(4.5px);
      border-radius:32px;
      overfolw-x:hidden;
      &::-webkit-scrollbar{
        width:0;
      }
      @media screen and (max-width:720px){
       scale:1;
       position:relative;
       right:50px;
      
         
    }
   

    }
`;

export default DashboardLogin