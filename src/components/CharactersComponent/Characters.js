import { useContext } from 'react';

import Spinner from 'react-spinkit';
import { ComicContext } from '../../contexts/ComicContext';

import './styles.css';

export function Characters() {
	const { isLoading, comics } = useContext(ComicContext);

	return isLoading ? (
		<div className='spinnerContainer'>
			<Spinner name='ball-spin-fade-loader' className='spinner' />
		</div>
	) : (
		<div className='charactersContainer'>
			<p>Characters</p>
		</div>
	);
}

export default Characters;
