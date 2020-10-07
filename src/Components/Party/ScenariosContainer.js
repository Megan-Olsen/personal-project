import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getScenarios} from '../../ducks/partyReducer'


class ScenariosContainer extends Component {

  render() {
      return(
          <div className="scenarioscontainer">
            <p>Scenarios</p>
            <p></p>
          </div>

      )
  }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getScenarios})(ScenariosContainer);