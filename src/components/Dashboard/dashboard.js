import React, { useEffect } from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Loyout';
import Chart from '../Chart/chart';
import { dollar } from '../../utils/icon';
import { useGlobalContext } from '../../Context/useContext';
import History from '../History/history';


function Dashboard() {
     const{totalExpense,incomes,expenses,totalIncome,totalBalance,getIncomes,getExpense} = useGlobalContext()

     useEffect(()=>{
      getIncomes()
      getExpense()
     },[])
  return (
    <DashboardStyled>
        <InnerLayout>
            <h1>All Transactions</h1>
            <div className="dash-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpense()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p >
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                <div className='history-con'>
                      <History/>
                      <h2 className='salary-title'>
                        Min<span>Salary</span>Max
                      </h2>
                      <div className='salary-item'>
                        <p className='amount'>
                          {Math.min(...incomes.map((item)=>item.amount))}
                        </p>
                        <p className='amount'>
                          {Math.max(...incomes.map((item)=>item.amount))}
                        </p>
                      </div>
                      <h2 className='salary-title'>
                        Min<span>Expense</span>Max
                      </h2>
                      <div className='salary-item'>
                        <p className='amount'>
                          {Math.min(...expenses.map((item)=>item.amount))}
                        </p>
                        <p className='amount'>
                          {Math.max(...expenses.map((item)=>item.amount))}
                        </p>
                      </div>  
                </div>
            </div>
        </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`

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
   bottom:130px;
  .salary-item{
    display:none;
  }
  .salary-title{
  display:none
  }
}
.dash-con{
  display: grid;
   grid-template-columns: repeat(5, 1fr);
   gap: 2rem;
   
  @media screen and (max-width:990px){
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
   
 }
.chart-con{
    grid-column: 1 / 4;
    height: 400px;
    @media screen and (max-width:1024px){
      grid-column: 1 / 7;
      
     
   }

.amount-con{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 2rem;
    
    .income, .expense{
        grid-column: span 2;
    }
.income, .expense, .balance{

  @media screen and (max-width:990px){
     scale:0.7;
     position:relative;
     right:30px;
     top:40px;
 }
       
   p{
         font-size: 1.5rem;
         font-weight: 700;
        }
    }

    .balance{
        grid-column: 2 / 4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p{
            color: var(--color-green);
            opacity: 0.6;
            font-size: 2.5rem;
        }
    }
}
}

.history-con{

  @media screen and (max-width:1024px){

   .amount{
     display:none;
   }
   .salary-title{
   display:none
   }
   .salary-item{
    display:none;
   }
 }
grid-column: 4 / -1;
h2{
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.salary-title{
    font-size: 1.2rem;
 
    span{
        font-size: 1.8rem;
    }
}
.salary-item{
  
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        font-weight: 600;
        font-size: 1.6rem;
    }
}
}
}
`;

export default Dashboard



{
  /*
  




       
  
  */
}