import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Dress App</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Create</a></li>
          </ul>
          <button className="btn btn-danger navbar-btn">Print your avatar!</button>
          <ul className="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">English (EN)
              <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">English</a></li>
                <li><a href="#">Spanish</a></li>
                <li><a href="#">Portuguese</a></li>
                <li><a href="#">French</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
