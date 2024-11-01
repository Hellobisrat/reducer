
import React,{useReducer} from "react";

const intialState={count:0, name:'bisrat', Area:'Texas'};

function reducer(state,action) {
  switch(action.type) {
    case  'increment':
    return {count :state.count +1,
            name:state.name='tomas',
            Area:state.Area='washington'
    };
    case 'decrement':
    return {count : state.count-1,
            name:state.name='brandon',
            Area:state.Area='Florida'
    };
    default :
    return state;
  }
  
}

function Counter(){
  const [state,dispatch] = useReducer (reducer,intialState)
  return (
    <div>
      <p>Count :{state.count} ,  name:{state.name} , Area:{state.Area} </p>
      <button onClick={()=>dispatch({type:'increment'})}>+</button>
      <button onClick={()=>dispatch({type:'decrement'})}>-</button>
    </div>
  )
}

export default Counter;