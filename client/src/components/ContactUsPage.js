import React, {Component} from 'react';

class ContactUsPage extends Component {
    render() {
        return (
            < div>
                <form>
                    <label>
                        Name:
                    </label>
                    <input type="text" name="name"/>

                    <label>
                        E-mail:
                    </label>
                    <input type="text" name="email"/>

                    <label>
                        Message:
                    </label>
                    <input type="text" name="message"/>


                    <input type="submit" value="Submit"/>


                </form>
            </div>
        )
            ;
    }
}

export default ContactUsPage;