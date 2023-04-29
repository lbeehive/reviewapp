import React, {useState} from "react";
import { Link } from 'react-router-dom';

function MovieDetail(props) {
  const [isCommenting, setComment] = useState(false);
  const [newComment, setNewComment] = useState('');

  //const movie = props.movie;

 return (
  <li key={props.id}>
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
  </li>
 );
}
export default MovieDetail;