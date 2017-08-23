import React, { Component } from 'react';

export default class Avatar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gender: this.props.gender
        }
        this.images = {
            avatarMale: "https://avatar-ssl.xboxlive.com/avatar/davidvkimball/avatar-body.png",
            avatarFemale: "http://avatar.xboxlive.com/avatar/An%20Actual%20Girl/avatar-body.png",
            iconMale: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Male_Icon.svg/2000px-Male_Icon.svg.png",
            iconFemale: "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Female_Icon.svg/220px-Female_Icon.svg.png"
        };

        this.changeGender = this.changeGender.bind(this);
    }

    changeGender(gender) {
        gender == "M" ? this.setState({ gender: "F" }) : this.setState({ gender: "M" });
        this.props.onChangeGender(this.state.gender);
    }

    render() {
        return (
            <div className="col-sm-6">
                <h3>Avatars</h3>
                <img src={this.state.gender == "M" ? this.images.avatarMale : this.images.avatarFemale} />
                <div className="row">
                    <div className="col-sm-12">
                        <img className="iconImg" src={this.images.iconFemale} onClick={() => this.changeGender("M")} />
                        <img className="iconImg" src={this.images.iconMale} onClick={() => this.changeGender("F")} />
                    </div>
                </div>
            </div>
        );
    }
}
