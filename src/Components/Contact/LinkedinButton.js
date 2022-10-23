import React, { Component } from 'react';

class LinkedinButton extends Component {
    open() {
        window.open('https://www.linkedin.com/in/adan-bougherara-183521254/', '_blank');
    }

    render() {
        return (
            <div className='linkedinButton' onClick={this.open}>

                <div className="content">
                    <h4>Linkedin <i className='fab fa-linkedin' /> </h4>
                </div>


            </div>
        );
    }
}

export default LinkedinButton;