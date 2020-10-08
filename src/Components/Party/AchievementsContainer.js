import React, {Component} from 'react';
import {connect} from 'react-redux';

class AchievementsContainer extends Component {

    render(){
        return(
            <div className="achievementsContainer">
                <p>Achievements</p>

            </div>
        )
    }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps)(AchievementsContainer);