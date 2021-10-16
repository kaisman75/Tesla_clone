import data from '../carInfo.json'
import * as actions from './actions/actionTypes'


export const Carreducer=(state=[],action)=>{
  
   if (action.type === actions.CAR_INFO){
    return  [...data]
   }
   else{
       return state;
   }

    }
