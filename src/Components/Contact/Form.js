import React, {Component} from 'react';
import axios from 'axios';



class Form extends Component {

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url:"/contact/submit",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert('Message Sent');
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send")
            }
        })
    }
    resetForm(){
        document.getElementById('contact-form').reset();
    }


    render(){
        return(
            <div>
            <p>Contact Us</p>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                    <label >Name: </label>
                    <input type="text" className="form-control" id="name"/>
                </div>
                <div className="form-group">
                    <label >Email Address: </label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailhelp" />
                </div>
                <div className="form-group">
                    <label >Message: </label>
                    <textarea className="form-control" rows="8" id="message"></textarea>
                </div>
                <button type="submit" className="btn">Submit</button>
                </form>


            </div>
        )
    }
}
export default Form;