
import { useReducer } from "react"

const UserReducer = () => {


// eslint-disable-next-line no-unused-vars
const [state, dispatch] = useReducer(reducer, initialState);

    
  return (
    <div>
        <h1  className=" text-[60px]">{state.count}</h1>
       <div className=" flex items-center  gap-1">
       <button  onClick={() => dispatch({type:"INCREMENT"})}>increase</button>
        <button  onClick={() => dispatch({type:"DECREMENT"})}>decrease</button>
        <button  onClick={() => dispatch({type:"RESET"})}>reset</button>
       </div>
    </div>
  )


}
const initialState = {count: 0}; 
const reducer = (state, action)  => {
    switch(action.type){
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            };
            case "DECREMENT":
                return {
                    ...state,
                    count: state.count - 1
                };
                case "RESET":
                return {
                    ...state,
                    count: state.count = 0
                };
                default:
                    return state;
    }
}
export default UserReducer