import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { AiOutlineSearch } from 'react-icons/ai';

import './styles.css';
export default function Search() {
	const [comicTitle, setComicTitle] = useState('');
	const isMobile = useMediaQuery({ query: '(max-device-width: 767px)' });

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
		<div className={isMobile ? 'mobileSearch' : 'searchContainer'}>
			{isMobile && <AiOutlineSearch />}
			<input
				className={isMobile ? 'mobileInput' : ''}
				placeholder={isMobile ? '' : 'Search...'}
				type='text'
				name='comicTitle'
				value={comicTitle}
				onChange={handleChangeSearchText}
				onKeyPress={handleKeyEnter}
			/>
		</div>
	);
}
