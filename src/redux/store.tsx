//创建store对象
import { createStore ,combineReducers} from "redux";
//引入reducer
import Count_reducer from "./reducers/add";
//多个reducer结合一起，{}总的对象
const allreducers = combineReducers(
    {
        count:Count_reducer
    }
   
)
//暴露store对象
export default createStore(allreducers);