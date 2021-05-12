import { useContext } from 'react';

import Spinner from 'react-spinkit';
import { ComicContext } from '../../contexts/ComicContext';

import ComicItem from '../ComicItemComponent/ComicItem';

import './styles.css';

export function Comics() {
	const { isLoading, comics } = useContext(ComicContext);

	return isLoading ? (
		<div className='spinnerContainer'>
			<Spinner name='ball-spin-fade-loader' className='spinner' />
		</div>
	) : (
		<div className='comicsContainer'>
			{comics.map((item) => (
				<ComicItem key={item.id} comic={item} />
			))}
		</div>
	);
}

export default Comics;
