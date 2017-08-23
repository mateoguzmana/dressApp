import React, { Component } from 'react';
import Avatar from './Avatar';
import Clothes from './Clothes';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gender: "M"
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Avatar
                        gender={this.state.gender}
                        onChangeGender={(gender) => {
                            this.setState({ gender: gender });
                        }}
                    />
                    <Clothes
                        gender={this.state.gender}
                    />
                </div>
            </div>
        );
    }
}
