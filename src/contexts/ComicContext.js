import { createContext, useState, useEffect, useCallback } from 'react';

import { api, authKey } from '../services/api';

export const ComicContext = createContext();

export function ComicContextProvider({ children }) {
	const [comics, setComics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getComics();
	}, []);

	const getComics = async function getComics() {
		try {
			const res = await api.get(`comics?${authKey}`, {
				params: {
					format: 'comic',
					noVariants: true,
					orderBy: 'title',
				},
			});
			setComics(res.data.data.results);
			setIsLoading(false);
		} catch (error) {
			console.log(error, 'Error getting all the comics data');
		}
	};

	const handleMore = useCallback(async () => {
		try {
			const offset = comics.length;
			const res = await api.get(`comics?${authKey}`, {
				params: {
					offset,
					limit: 4,
					orderBy: 'title',
					format: 'comic',
					noVariants: true,
				},
			});
			setComics([...comics, ...res.data.data.results]);
		} catch (error) {
			console.log('Error getting more comics' + error);
		}
	}, [comics]);

	return (
		<ComicContext.Provider
			value={{
				comics,
				isLoading,
				handleMore,
			}}
		>
			{children}
		</ComicContext.Provider>
	);
}
