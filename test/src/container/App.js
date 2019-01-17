import React, { Component } from 'react';

import {connect} from 'react-redux'

import {loadInitialData} from '../action/loadDataActions';

import Home from '../Home'



class App extends Component {
  constructor(props){
    super(props);
    this.state={peoplesData:0}
  }
  static getDerivedStateFromProps(preProps,prevState){

    if(prevState.peoplesData===0){
          preProps.loadInitialData()
  //   return{
  //     peoplesData:peopleData.People
  //   }
  }
  }


componentDidMount(){
  this.setState({peoplesData:1})
}



  render() {
    console.log("rsssssssssssssss1",this.props.loadData.loading);
    if(this.props.loadData.loading===true){
    return (
      <div>loading...</div>
)
}
else{
  return(
  <Home peopleData={this.props.loadData.result} />
  )
}
}
}


const mapStateToProps =(state)=>{return{loadData : state.loadinitial.loadData}}
const mapDispatchToProps = {loadInitialData}
export default connect(mapStateToProps,mapDispatchToProps) (App);
