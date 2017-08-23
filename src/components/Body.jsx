import React, { Component } from 'react';

export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            gender: "M"
        }
        this.avatarMale = "https://avatar-ssl.xboxlive.com/avatar/davidvkimball/avatar-body.png";
        this.avatarFemale = "http://avatar.xboxlive.com/avatar/An%20Actual%20Girl/avatar-body.png";
        this.changeGender = this.changeGender.bind(this);
    }

    changeGender(gender) {
        gender == "M" ? this.setState({ gender: "F" }) : this.setState({ gender: "M" });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h3>Avatar</h3>
                        <img src={this.state.gender == "M" ? this.avatarMale : this.avatarFemale} />
                        <div className="row">
                            <div className="col-sm-12">
                                <img className="iconImg" src="http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Female_Icon.svg/220px-Female_Icon.svg.png" onClick={() => this.changeGender("M")} />
                                <img className="iconImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Male_Icon.svg/2000px-Male_Icon.svg.png" onClick={() => this.changeGender("F")} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h3>Clothes</h3>
                        <p>Here is all clothe</p>
                    </div>
                </div>
            </div>
        );
    }
}
