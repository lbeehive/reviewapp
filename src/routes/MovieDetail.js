import React, {useState} from "react";
import { Link } from 'react-router-dom';

function MovieDetail(props) {
  const [isCommenting, setComment] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState('');

  const reviewList = props.reviews.map((review) => (
    <li className="reviews">{review.Stars}:  {review.Review}</li>
    )) ;
  
  function selectNewMovie() {
    props.updateMovie(props.id);
  }

  function handleChangeStar(e) {
    setNewRating(e.target.value);
  }

  function handleChange(e) {
    setNewComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addComment(props.id, newRating, newComment);
    
    setNewComment("");
    setComment(false);
  }

  const commentingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="movie-label" htmlFor={props.id}>
          Star Rating (1 to 5):
        </label>
        <input 
          id={props.id}
          className="star-text"
          type="text"
          value={newRating}
          onChange={handleChangeStar}
        />
        <label className="movie-label" htmlFor={props.id}>
          Comment:
        </label>
        <input 
          id={props.id}
          className="comment-text"
          type="text"
          value={newComment}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setComment(false)}>
          Cancel Rating
        </button>
        <button type="submit" className="btn btn__primary comment-edit">
          Save Rating
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <Link to={props.id} onClick={selectNewMovie}>
        {props.title}
      </Link>
      <p>{props.date}</p>
      <p>{props.length}</p>
      <p>{props.genre}</p>
      <p>{props.description}</p>
      <img src={props.poster} alt='movie'/>
      <iframe width="560" height="315" src={props.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <ul id="review-list">
        {reviewList}
      </ul>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setComment(true)}>
          Add Review
        </button>
      </div>
      <textarea
        id="homeComment"
        type="textarea"
        rows={6}
        cols={20}
      />
    </div>
  );
/*

    <Link to={props.id}>
      {props.title}
    </Link>
    <p>{props.date}</p>
    <p>{props.length}</p>
    <p>{props.genre}</p>
    <p>{props.description}</p>
    <img src={props.poster} alt='movie'/>
    <iframe width="560" height="315" src={props.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <label>comment</label>
    <textarea
      id="homeComment"
      type="textarea"
      rows={6}
      cols={20}
      
    />

*/
  return (
  <li key={props.id}>{isCommenting ? commentingTemplate : viewTemplate}</li>
 );
}
export default MovieDetail;