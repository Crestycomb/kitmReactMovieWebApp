import React, {Component} from 'react';
import styles from './movie.css'

class Movie extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.data.Response === "True" &&
                <div className="row m-sm-4">
                    <div className="col-xl-4 col-lg-4 col-md-12 m-md-4">
                        <img src={this.props.data.Poster} alt={this.props.data.Title + " movie poster"} class="img-fluid" />
                    </div>
                    <table className="table col">
                        <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Year</th>
                            <th scope="col">Runtime</th>
                            <th scope="col">Genres</th>
                            <th scope="col">Director</th>
                            <th scope="col">IMDB Rating</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">{this.props.data.Title}</th>
                            <td>{this.props.data.Year}</td>
                            <td>{this.props.data.Runtime}</td>
                            <td>{this.props.data.Genre}</td>
                            <td>{this.props.data.Director}</td>
                            <td>{this.props.data.imdbRating}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                }
                {this.props.data.Response === "False" &&
                <h2>Error: movie not found</h2>
                }
            </div>
        )
    }
};

export default Movie;
