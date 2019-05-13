// 引入 Component  connect   父及桥梁
import React,{ Component } from 'react';
import {connect} from 'react-redux'
import {SET_NAME,ADD_AGE} from './actions/index.js'

    class App extends Component{

      fn(){
          this.props.setName('this.props.setName 是 在action 也是props中传入的 ')
      }

      fn2(){
          this.props.addAge(1)
      }


      render(){
        return(
          <div>
            <p>Hello，正式认识Redux!</p>
            <p>{this.props.name}</p>
            <p>{this.props.age}</p>
            <button onClick={this.fn.bind(this)}>更改姓名</button>
            <button onClick={this.fn2.bind(this)}>年龄++</button>
          </div>
        )
      }
    }

    // export default App;
    //


    export default connect((state,props)=>{
      console.log(state);
        return state.guanli;
        // return {
        //   ...state,
        //   name:props.name
        // }
    },
    {
      setName(name){
        return{
          type:SET_NAME,
          name
        }
      },
      addAge(nl){
        return{
          type:ADD_AGE,
          nl
        }
      }
    })(App);
