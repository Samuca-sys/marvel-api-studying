import React, { useEffect, useState } from 'react';

import Spinner from 'react-spinkit';

import ListItem from '../ListItemComponent/ListItem';

import { api } from '../../services/api';

import './styles.css';

export function List() {
	const [comics, setComics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getComics();
	}, []);

	const getComics = async function getComics() {
		try {
			const res = await api.get('/comics', {
				params: {
					limit: 10,
					format: 'comic',
					startYear: '2021',
					noVariants: true,
				},
			});
			setComics(res.data.data.results);
			setIsLoading(false);
		} catch (error) {
			console.log(error, 'Error');
		}
	};

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
