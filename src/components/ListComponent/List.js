import React from 'react';

import Spinner from 'react-spinkit';

import ListItem from '../ListItemComponent/ListItem';

import { api } from '../../services/api';

import './styles.css';

class List extends React.Component {
	state = {
		comics: [],
		isLoading: true,
	};

	componentDidMount() {
		this.getComics();
	}
	getComics = async () => {
		try {
			const res = await api.get('/comics');

			this.setState({
				comics: res.data.results,
				isLoading: false,
			});
		} catch (error) {
			console.log(error, 'Error');
		}
	};

	render() {
		const { comics, isLoading } = this.state;
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
}

export default List;
