//引入维护的变量名
import {ADD} from '../constans'
//初始化状态和加工状态
//初始化状态
const preinit:number = 0;


interface action{
    type:string,
    data:number
}
export default function Count_reducer(state:number = preinit,action:action){
    
    const {type,data} = action;
    switch(type){
        case ADD:
         let newData = state + data;
            return  newData
        default:
            return state
    }
}