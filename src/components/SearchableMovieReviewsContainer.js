import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    handleChange = search => {
        this.setState({
            searchTerm: search.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                reviews: json.results
            })
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
               

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer