import React, { ReactComponentElement, ReactNode } from 'react'
import { connect } from 'react-redux';
import { add_action } from '../redux/actions/add';


 const Home = (props:any):any => {
    
  return (
    <div>
        <p>Home</p>
        <h2>redux-react-redux使用</h2>
        reducer值:{props.preState}<br/>
        <button onClick={()=>props.changeCount(1)}>进行计算</button>
    </div>
  )
}


export default connect(
    (state:any)=>({preState:state.count}),
    dispatch=>({
        changeCount:(count:number)=>dispatch(add_action(count))
    })
)(Home);
