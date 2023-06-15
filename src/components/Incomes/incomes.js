import React, { useEffect } from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Loyout';
import { useGlobalContext } from '../../Context/useContext';
import Form from '../Form/useForm';
import IncomeItem from '../IncomeItem/incomeItem';

function Incomes() {
    const {addIncome,incomes,getIncomes,deleteIncome,totalIncome} = useGlobalContext()

    useEffect(()=>{
      getIncomes()
    },[])
  return (
    <IncomeStyled>
         <InnerLayout>
            <h1>Incomes</h1>
            <h2 className='total-income'>Total Income: <span>${totalIncome()}</span></h2>
             <div className='income-content'>
                <div className='form-container'>
                    <Form/>
                </div>
                <div className="incomes">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                               deleteItem={deleteIncome}
                            />
                        })}
                </div>
             </div>
        </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
    display:flex;
    overflow:auto;
    @media screen and (max-width:720px){
      scale:0.6;
      position:relative;
      right:110px;
      bottom:170px;
     
   }
   @media screen and (max-width:1024px){
    scale:0.6;
    position:relative;
    right:70px;
    bottom:170px;
   
 }
    .total-income{
      display:flex;
      justify-content:center;
      align-items:center;
      background:#FCF6F9;
      border:2px solid #FFFFFF;
      box-shadow:0px 1px 15px rgba(0,0,0,0.06);
      border-radius:20px;
      padding:1rem;
      margin:1rem 0;
      font-size:2rem;
      gap:.5rem;
      @media screen and (max-width:720px){
        scale:0.5;
        position:relative;
       
     }
     @media screen and (max-width:1024px){
      scale:0.7;
      position:relative;
      right:50px;
    
     
   }
    }
    span{
      font-size:2.5rem;
      font-weight:800;
      color:var(--color-green);
      
    }
    .income-content{
         display:flex;
         gap:2rem;
         @media screen and (max-width:720px){
          scale:0.7;
          display:flex;
          flex-direction:column;
          position:relative;
          
         
       }
       @media screen and (max-width:1024px){
        scale:1;
        display:flex;
        flex-direction:column;
        position:relative;
        
       
     }
         .incomes{
          flex:1;
          @media screen and (max-width:720px){
             scale:0.7;
             position:relative;
             bottom:50px;
             right:80px
         }
         @media screen and (max-width:1250px){
          scale:0.7;
          position:relative;
          bottom:50px;
          right:80px
      }
         }
    }
`;

export default Incomes