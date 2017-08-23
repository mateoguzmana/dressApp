import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h3>Avatar</h3>
                        <img src="http://www.sos-ingenieria.com/web/wp-content/uploads/2017/03/avatar.png" />
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
