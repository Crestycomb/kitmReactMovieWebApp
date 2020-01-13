import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './navbar.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import DropdownCustom from "../dropdown/dropdownCustom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            loading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log("handleChange!");
    }

    handleSubmit(event) {
        this.setState(
            {
                newValue: this.state.value,
            }, () =>
                this.props.callbackFromParent(this.state.newValue), // here is where you put the callback
        );
        event.preventDefault();

        console.log("handleSubmit!");
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <h4 className="font-weight-bold mr-md-5 mr-sm-1">Movies DB</h4>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav mr-auto mt-0 mt-lg-0">
                            <li className="nav-item active mr-2 mb-2">
                                <Link to={"/"}>
                                    <button type="button" className="btn btn-primary">Home</button>
                                </Link>
                            </li>
                            <li className="nav-item mr-2 mb-2">
                                <Link to={"/About"}>
                                    <button type="button" className="btn btn-primary">About</button>
                                </Link>
                            </li>
                            <li className="nav-item mr-2 mb-2">
                                <DropdownCustom></DropdownCustom>
                            </li>
                        </ul>

                        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search" onChange={this.handleChange} value={this.state.value}/>
                                <input className="btn btn-outline-secondary my-2 my-sm-0" type="submit" value="Submit"/>
                        </form>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;