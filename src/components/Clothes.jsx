import React, { Component } from 'react';
import Translations from '../data/Translations';

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
                <h3>{Translations.clothesView.title["en"]}</h3>
                <p>{Translations.clothesView.description["en"].replace("${gender}", this.state.gender == "M" ? "Male" : "Female")}</p>
            </div>
        );
    }
}
