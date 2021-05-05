import React, { useState } from 'react';

import './styles.css';
export default function Search() {
	const [comicTitle, setComicTitle] = useState('');

	function handleChangeSearchText(event) {
		setComicTitle(event.target.value);
	}

	function handleKeyEnter(event) {
		if (event.key === 'Enter') {
			setComicTitle(event.target.value);
			setComicTitle('');
		}
	}

	return (
		<div className='searchContainer'>
			<input
				type='text'
				placeholder='Search...'
				name='comicTitle'
				value={comicTitle}
				onChange={handleChangeSearchText}
				onKeyPress={handleKeyEnter}
			/>
		</div>
	);
}
