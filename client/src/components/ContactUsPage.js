import React, {Component} from 'react';
import './ContactUsPage.css'
import {Link} from "react-router-dom"

class ContactUsPage extends Component {
    render() {
        return (
            <div id="form-main">
                <div id="form-div">
                    <form onSubmit={this.handlesubmit} className="form" id="form1">

                        <p className="name">
                            <input name="name" type="text"
                                   className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                                   placeholder="Name" id="name" required/>
                        </p>

                        <p className="email">
                            <input name="email" type="text" className="validate[required,custom[email]] feedback-input"
                                   id="email" placeholder="Email" required/>
                        </p>

                        <p className="text">
                            <textarea name="text" className="validate[required,length[6,300]] feedback-input"
                                      id="comment" placeholder="Comment" required></textarea>
                        </p>


                        <div className="submit">
                            <Link to={"/thank-you"}>
                                <input type="submit" value="SEND" id="button-green"/>
                            </Link>

                            <div className="ease"></div>
                        </div>
                    </form>
                </div>
            </div>
        )
            ;
    }
}

export default ContactUsPage;