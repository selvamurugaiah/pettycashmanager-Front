import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../Context/useContext';

function History() {

    const {transactionHistory} = useGlobalContext()
    const [...history] = transactionHistory()
  return (
    <HistoryStyled>
        <h2>Recent History</h2>
        {history.map((item)=>{
            const {_id,title,amount,type} =item
            console.log('type', type)
        return(
            <div key={_id} className='history-item'>
                <p style={{
                    color:type ==='expense' ?'red':'var(--color-green'
                }}>
                    {title}
                </p>
                <p style={{
                    color:type ==='expense' ?'red':'var(--color-green'
                }}>
                    {type ==='expense' ?`-${!amount <= 0 ? amount:0}`:`+${!amount <= 0 ? amount:0}`}
                </p>
            </div>
        )
        })}
    </HistoryStyled>
  )
}

const HistoryStyled = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
    @media screen and (max-width:1024px){
        position:relative;
        left:180px;
        scale:0.7;
      }
    .history-item{
        background:#FCF9F9;
        border:2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
        padding:1rem;
        border-radius:20px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        
    }
`;

export default History