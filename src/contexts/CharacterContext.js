import { createContext, useEffect, useState, useCallback } from 'react';

import { api } from '../services/api';

export const CharacterContext = createContext();

export function CharacterContextProvider({ children }) {
	const [characters, setCharacters] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getCharacters();
	}, []);

	const getCharacters = async function getCharacters() {
		try {
			const res = await api.get('/characters');
			setCharacters(res.data.data.results);
			setIsLoading(false);
		} catch (error) {
			console.log(error, 'Error getting characters data');
		}
	};

	const handleMore = useCallback(async () => {
		try {
			const offset = characters.length;
			const res = await api.get('/characters', {
				params: {
					offset,
					limit: 5,
				},
			});
			setCharacters([...characters, ...res.data.data.results]);
		} catch (error) {
			console.log('Error getting more comics' + error);
		}
	}, [characters]);

	return (
		<CharacterContext.Provider
			value={{
				characters,
				isLoading,
				handleMore,
			}}
		>
			{children}
		</CharacterContext.Provider>
	);
}
