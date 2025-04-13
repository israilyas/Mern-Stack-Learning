import React, { useReducer } from 'react'

const UseReducer = () => {

    const reducer = (state, action)=>{
        // console.log(state,action)
        if(action.type === "Increment"){
            return state + 1
        }
        if(action.type === "Decrement"){
            return state - 1
        }

    }

    const [count, dispatch] = useReducer(reducer, 0)
    console.log(useReducer(reducer,0))

    return (
        <div className='flex flex-col gap-4'>
            <h1>{count}</h1>
            <button onClick={()=>dispatch({type:"Increment"})} >Increment</button>
            <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        </div>
    )
}

export default UseReducer

// Whenever dispatch called it sends action to reducer function
