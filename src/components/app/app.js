import React, { Component } from 'react';
import './app.scss';
import Container from '../container/container.js';
import {getdata,appContext} from '../../config'
class App extends Component{
   constructor(props) {
      super(props);
      this.state = {
         showPlugins:false
      }
   }
   componentDidMount(){
      const pdata = getdata(0,this.props.resultperpage );
      this.props.assigndata({data:pdata.data,totalresult:pdata.totallength})
   }
   componentWillReceiveProps(nextProps) {
      if(this.props.resultperpage != nextProps.resultperpage) {
         const pdata = getdata(0,nextProps.resultperpage );
         this.props.updatedata({data:pdata.data,page:0})
      }
   }
   setpopupstate(state) {
      this.setState({
         showPlugins:state
      })
   }
   render(){
      const appprovider = {
         setpopup:this.setpopupstate.bind(this),
         showPlugins:this.state.showPlugins
       }
      return(
         <appContext.Provider value={appprovider}>
            <section onClick={this.setpopupstate.bind(this,false)}>
               <Container/>
            </section>
         </appContext.Provider>
      );
   }
}
export default App;