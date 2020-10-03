import React from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/authReducer'

//TODO Write methods, connect to JSX

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



  handleCancel = () => {
    this.props.toggleEdit()
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  handleSave = () => {
    this.props.handleEdit(this.props.auth.userid, this.state.username)
    this.props.toggleEdit()
  }

  render() {
    return (
      <div className="post-container">
        <div>
          <p>Username:</p>
          <input
            className="post-text"
            value={this.state.username}
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
            onClick={() => {
              this.handleSave()
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

