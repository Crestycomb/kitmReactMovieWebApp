import React, {Component} from 'react';
import styles from './info.css'
import {Route, Switch} from "react-router-dom";

class Info extends React.Component {
    render() {
        return (
            <>
                <Route exact path={'/Action'}>
                    <div className="container-fluid">
                        <p>
                            ActionAction
                        </p>
                    </div>
                </Route>
                <Route exact path={'/Drama'}>
                    <div className="container-fluid">
                        <p>
                            DramaDrama
                        </p>
                    </div>
                </Route>
                <Route exact path={'/Thriller'}>
                    <div className="container-fluid">
                        <p>
                            ThrillerThriller
                        </p>
                    </div>
                </Route>
                <Route exact path={'/About'}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <p className="p-5">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aperiam optio.
                                    Ad adipisci alias commodi consequuntur dolore et excepturi fugiat illo inventore
                                    nihil
                                    perferendis, quidem, reprehenderit sequi vel vitae voluptatem!
                                </p>
                            </div>
                            <div className="col">
                                <img src="https://clipartart.com/images/bath-duck-clipart.jpg" alt="Rubber Ducky" className="mt-5"/>
                            </div>
                        </div>
                    </div>
                </Route>
            </>
        )
    }
}

export default Info;