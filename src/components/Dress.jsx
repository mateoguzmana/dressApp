import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

export default class Dress extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}
