import React from 'react';

const MovieReviews = ({ reviews }) => 
<div className="review-list">
    {reviews.map(review => 
    <div className="review" key={review.display_title}>
        <h2>{review.display_title}</h2>
        <h3>{review.headline}</h3>
        <p>{review.summary_short}</p>
    </div>
    )}
</div>

MovieReviews.defaultProps = {
    reviews: []
}
    


export default MovieReviews