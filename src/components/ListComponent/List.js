import { useContext } from 'react';

import Spinner from 'react-spinkit';
import { ComicContext } from '../../contexts/ComicContext';

import ListItem from '../ListItemComponent/ListItem';

import './styles.css';

export function List() {
	const { isLoading, comics } = useContext(ComicContext);

	return isLoading ? (
		<div className='spinnerContainer'>
			<Spinner name='ball-spin-fade-loader' className='spinner' />
		</div>
	) : (
		<div className='listContainer'>
			{comics.map((item) => (
				<ListItem key={item.id} comic={item} />
			))}
		</div>
	);
}

export default List;
