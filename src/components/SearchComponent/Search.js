import React from 'react';

import { FaSearch } from 'react-icons/fa';

import './styles.css';
export default class Search extends React.Component {
	state = {
		comicTitle: '',
	};

	handleChangeSearchText = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<div className='searchContainer'>
				<form>
					<input
						type='text'
						placeholder='Search...'
						name='comicTitle'
						value={this.state.comicTitle}
						onChange={this.handleChangeSearchText}
					/>
					<button type='submit'>
						<FaSearch className='searchIcon' />
					</button>
				</form>
			</div>
		);
	}
}
