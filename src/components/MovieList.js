import React from 'react';
import MovieListHeading from './MovieListHeading';

const MovieList = (props) => {
	const FavoriteComponent = props.favoriteComponent;

	return (
		<>
			{props.movieArray.map((movieArray, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movieArray.image} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movieArray)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavoriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
