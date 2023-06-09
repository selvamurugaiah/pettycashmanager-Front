import React, { useContext, useState } from "react"
import axios from "axios"

const URL = "http://localhost:3500/api/v1/";


const Context = React.createContext()

export const Provider = ({children}) => {

    const [incomes,setIncomes]= useState([])
    const [expenses,setExpenses]=useState([])
    const [error,setError]=useState(null)

    //calculate incomes

    const addIncome = async (income)=>{
        const response = await axios.post(`${URL}add-income`,income)
        .catch((err)=>{
            setError(err.response.data.message)
        })
        getIncomes()
      
    }

    const getIncomes = async ()=>{
        const response = await axios.get(`${URL}get-incomes`)
           setIncomes(response.data)
           console.log(response.data)
    }
     
    const deleteIncome =async(id)=>{
        const res = await axios.delete(`${URL}delete-income/${id}`)
        getIncomes()
    }

    const totalIncome =()=>{
        let totalIncome =0;
        incomes.forEach((income)=>{
          totalIncome+=income.amount
        })
        return totalIncome;
    }

       console.log(totalIncome())

    //calculate expenes
    
    const addExpense = async (expense)=>{
        const response = await axios.post(`${URL}add-expense`,expense)
        .catch((err)=>{
            setError(err.response.data.message)
        })
        getExpense()
      
    }

    const getExpense = async ()=>{
        const response = await axios.get(`${URL}get-expense`)
           setExpenses(response.data)
           console.log(response.data)
    }
     
    const deleteExpense =async(id)=>{
        const res = await axios.delete(`${URL}delete-expense/${id}`)
        getExpense()
    }

    const totalExpense =()=>{
        let totalExpense =0;
        expenses.forEach((expense)=>{
          totalExpense+=expense.amount
        })
        return totalExpense;
    }

    const totalBalance =()=>{
        return totalIncome()-totalExpense()
    }


    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }
       
    return(
        <Context.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            expenses,
            addExpense,
            getExpense,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory,
            error,
            setError

        }}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalContext =()=>{
    return useContext(Context)
}