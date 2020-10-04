import React from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/authReducer'
import axios from 'axios';



class Edit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
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
    this.props.toggleEdit()
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  handleEdit = () => {
    console.log('hit line 40')
    const {username} = this.state
    const {userid} = this.props.auth
    axios.put('/api/user/username', {username, userid}).then((res) => {
        return res.data
    })
}


  handleSave = (e) => {
    console.log('hit handlesave')
    e.preventDefault()
    this.handleEdit(this.state.username, this.props.auth.userid)
    this.props.getUser()
    this.props.toggleEdit()
  }

  render() {
    return (
      <div className="post-container">
        <div>
          <p>Username:</p>
          <input
            className="post-text"
            name="username"
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

