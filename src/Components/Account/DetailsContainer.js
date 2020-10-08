import React, {Component} from 'react'
import Details from './Details'
import Edit from './Edit'
import EditEmail from './EditEmail'


class DetailsContainer extends Component {
  constructor() {
    super()
    this.state = {
      isEditing: false,
      isEditingEmail: false
    }
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }
  toggleEditEmail = () => {
    this.setState({
      isEditingEmail: !this.state.isEditingEmail
    })
  }

  render() {
    return this.state.isEditing ? (
      <Edit
        toggleEdit={this.toggleEdit}
      />
    ) : this.state.isEditingEmail ? ( <EditEmail toggleEditEmail={this.toggleEditEmail}/>) : (
      <Details
        toggleEdit={this.toggleEdit}
        toggleEditEmail={this.toggleEditEmail}
      />
    )
  }
}

export default DetailsContainer