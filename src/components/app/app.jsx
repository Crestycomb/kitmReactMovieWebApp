import React, {Component} from 'react';
import styles from './app.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Movie from '../movie/movie';
import Navbar from '../navbar/navbar';
import Info from '../info/info';


// http://www.omdbapi.com/?t=terminator&apikey=fe8f90a
// https://www.omdbapi.com/?apikey=e4db3ced&t=terminator

let omdb = "http://www.omdbapi.com/";
let stuffBeforeTitle = "?t=";
let apiKey = "&apikey=e4db3ced";
let myApiKey = "&apikey=fe8f90a";

class App extends Component {
    constructor() {
        super();
        this.state = {

            currentTitle: "up",
            hasErrors: null,
            hasData: false,
        };
    }

    // initial fetch here
    // componentDidMount() {
    //     let endpoint = omdb + stuffBeforeTitle + this.state.currentTitle + apiKey;
    //     fetch(endpoint)
    //         .then(res => res.json())
    //         .then(res => this.setState({data: res}))
    //         // Im clueless so Im still using this useless arrow function
    //         .then(res => this.setState({hasData: true}))
    //         .then(console.log("initial fetch: " + this.state.data))
    //         .catch(() => this.setState({hasErrors: true}));
    //     console.log("initial fetch: " + this.state.data)
    // }

    myCallback = (dataToParent) => {
        // turns on loading thingy
        this.setState({isLoading: true});
        console.log("1: " + this.state.currentTitle);
        this.setState({currentTitle: dataToParent});


        let endpoint = omdb + stuffBeforeTitle + dataToParent + apiKey;

        const request = async () => {
            const response = await fetch(endpoint);
            const json = await response.json();
            await this.setState({data: json}, console.log(json));
            await this.setState({isLoading: false})
            await this.setState({hasData: true})
        };
        request();
        console.log("2: " + this.state.currentTitle);
    };

    render() {
        return (
            <>
                <Router>
                    <header className="container-fluid mb-4">
                        <Navbar callbackFromParent={this.myCallback}/>
                    </header>
                    <main>
                        {
                            this.state.hasData === true &&
                            <>
                                <Route exact path={'/'}>
                                    <Movie
                                        data={this.state.data}
                                    />
                                </Route>

                            </>
                        }
                        <Switch>
                            <Info/>
                        </Switch>
                    </main>
                </Router>

            </>
        )
    }
}

export default App;