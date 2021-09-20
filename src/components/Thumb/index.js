import React from 'react';
import { Link } from 'react-router-dom';

import { Image, MovieTitle } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable, movieTitle }) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb' />
                <MovieTitle>{movieTitle}</MovieTitle>
            </Link>
        ) : (
        <Image src={image} alt='movie-thumb' />
        )}
    </div>
);

export default Thumb;