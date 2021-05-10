import { createContext, useState, useEffect } from 'react';

import { api } from '../services/api';

export const ComicContext = createContext();

export function ComicContextProvider({ children }) {
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
					startYear: '2001',
					noVariants: true,
				},
			});
			setComics(res.data.data.results);
			setIsLoading(false);
		} catch (error) {
			console.log(error, 'Error getting all the comics data');
		}
	};

	return (
		<ComicContext.Provider
			value={{
				comics,
				isLoading,
			}}
		>
			{children}
		</ComicContext.Provider>
	);
}
