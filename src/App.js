
import styled from 'styled-components';

import { MainLayout } from './styles/Loyout';
import bg from './img/bg.jpg'
import Orb from './components/Orb/orb';
import Navigation from './components/Navigation/Navigation';
import React, { useMemo, useState } from 'react';
import Dashboard from './components/Dashboard/dashboard';
import Expenses from './components/Expenses/expenses';
import Incomes from './components/Incomes/incomes';
import { useGlobalContext } from './Context/useContext';


function App() {
  const [active,setActive] = React.useState(1)

     const global = useGlobalContext()
     console.log(global)

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

  );
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

    }
`;

export default App;
