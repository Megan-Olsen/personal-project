import React from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/authReducer'
import axios from 'axios';



class Edit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
    }
  }

  componentDidMount(){
    if (this.props.isLoggedIn) {
        this.props.getUser()
    }
}

handleInput = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}


  handleCancel = () => {
    this.props.toggleEditEmail()
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  handleEdit = () => {
    const {email} = this.state
    const {userid} = this.props.auth.user
    axios.put('/api/user/email', {email, userid}).then((res) => {
        return res.data
    })
}


  handleSave = (e) => {
    console.log('hit handlesave')
    e.preventDefault()
    this.handleEdit(this.state.email, this.props.auth.userid)
    this.props.getUser()
    this.props.toggleEditEmail()
  }

  render() {
    return (
      <div className="post-container">
        <div>
          <p>Email:</p>
          <input
            className="post-text"
            name="email" type="email"
            onChange={(e) => {
              this.handleChange(e)
            }}
          />
        </div>
        <div className="post-buttons">
          <button
            className="input-container-button-small"
            onClick={() => {
              this.handleCancel()
            }}
          >
            Cancel
          </button>
          <button
            className="input-container-button-small"
            onClick={(e) => {
              this.handleSave(e)
            }}
          >
            Save
          </button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getUser})(Edit);