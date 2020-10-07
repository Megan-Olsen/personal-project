import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getScenarios} from '../../ducks/partyReducer'


class ScenariosContainer extends Component {
//   constructor(){
//     super()
//     this.state ={
//       completedScenarios: [],
//       lockedScenarios: [],
//       unlockedScenarios: []
//     }
//   }
//    componentDidMount(){
//      this.getCoScenarios()
//      this.getLoScenarios()
//      this.getUlScenarios()
//   }

//   getCoScenarios(){
//     let scenarios = this.props.partr.scenarios
//     let completedScenarios = []
//     for( let prop in scenarios){
//     if(scenarios[prop] === "Completed"){
//         completedScenarios.push(prop)
//     }}
//     return completedScenarios
// }
// getLoScenarios(){
//   let scenarios = this.props.partr.scenarios
//   let lockedScenarios = []
//   for( let prop in scenarios){
//   if(scenarios[prop] === "Locked"){
//       lockedScenarios.push(prop)
//   }}
//   return lockedScenarios
// }
//   getUlScenarios(){
//     let scenarios = this.props.partr.scenarios
//     let unlockedScenarios = []
//     for( let prop in scenarios){
//     if(scenarios[prop] === "Unlocked"){
//         unlockedScenarios.push(prop)
//     }}
//     return unlockedScenarios
// }


  render() {

      return(
          <div className="scenarioscontainer">
            <p>Scenarios</p>
      <h2>Locked Scenarios</h2><p></p>
      <h2>Completed Scenarios</h2><p></p>
      <h2>Unlocked Scenarios</h2><p></p>
          </div>

      )
  }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getScenarios})(ScenariosContainer);