import { createContext, useEffect, useState } from 'react';

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

	return (
		<CharacterContext.Provider
			value={{
				characters,
				isLoading,
			}}
		>
			{children}
		</CharacterContext.Provider>
	);
}
