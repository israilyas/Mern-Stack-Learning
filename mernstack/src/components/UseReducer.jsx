import React, { useReducer } from 'react'

const UseReducer = () => {

    const initialState = {
        count:0,
        inc:2,
        dec:2
    }

    const reducer = (state, action)=>{
        // console.log(state,action)
        // if(action.type === "Increment"){
        //     return state + 1
        // }
        // if(action.type === "Decrement"){
        //     return state - 1
        // }
        // if(action.type === "Reset"){
        //     return state = 0
        // }

        switch (action.type) {
            case "Increment":
                return {
                    ...state,//all other data remain same
                    count : state.count + 1}

            case "Decrement":
                return {
                    ...state,
                    count : state.count - 1}
        
            case "Reset":
                return {
                    ...state,
                    count : 0}
        
            default:
                return state
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(useReducer(reducer,0))

    return (
        <div className='flex flex-col gap-4'>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:"Increment"})} >Increment</button>
            <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
            <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
        </div>
    )
}

export default UseReducer

// Whenever dispatch called it sends action to reducer function
