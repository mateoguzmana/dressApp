import React, { Component } from 'react';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gender: this.props.gender
        }
    }

    render() {
        return (
            <div className="col-sm-6">
                <h3>Clothess</h3>
                <p>Clothe for gender {this.state.gender == "M" ? "Male" : "Female"}</p>
            </div>
        );
    }
}
