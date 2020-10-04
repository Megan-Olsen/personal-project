import React, {Component} from 'react'
import Details from './Details'
import Edit from './Edit'


class DetailsContainer extends Component {
  constructor() {
    super()
    this.state = {
      isEditing: false,
    }
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }

  render() {
    return this.state.isEditing ? (
      <Edit
        toggleEdit={this.toggleEdit}
      />
    ) : (
      <Details
        toggleEdit={this.toggleEdit}
      />
    )
  }
}

export default DetailsContainer