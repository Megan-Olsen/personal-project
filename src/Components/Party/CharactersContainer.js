import React, {Component} from 'react'
import {connect} from 'react-redux'

class CharactersContainer extends Component{


    render(){
        return(

            <div className="characters">
                <p>
                    Characters
                </p>


            </div>
        )
    }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps)(CharactersContainer);
