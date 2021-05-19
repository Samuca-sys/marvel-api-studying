import { createContext, useState, useEffect, useCallback } from 'react';

import { ComicModal } from '../components/ComicModal/ComicModal';

import { api, authKey } from '../services/api';

export const ModalContext = createContext();

export function ModalContextProvider({ children }) {
	const [isComicModalOpen, setIsComicModalOpen] = useState(false);
	const [comic, setComic] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [comicId, setComicId] = useState('');

	const getComic = useCallback(() => {
		(async () => {
			try {
				const res = await api.get(`comics?${authKey}`, {
					params: {
						id: comicId,
					},
				});
				setComic(res.data.data.results);
				setIsLoading(false);
				openComicModal();
			} catch (error) {
				console.log(error, 'Error getting specific comic data');
			}
		})();
	}, [comicId]);

	useEffect(() => {
		(async () => {
			if (comicId !== '') {
				try {
					setComicId(comicId);
					setIsLoading(false);
					getComic();
				} catch (error) {
					console.log(error, 'Error getting specific comic id');
				}
			}
		})();
	}, [comicId, getComic]);

	function closeComicModal() {
		setIsComicModalOpen(false);
		setComicId('');
	}

	function openComicModal() {
		setIsComicModalOpen(true);
	}
	return (
		<ModalContext.Provider
			value={{
				closeComicModal,
				comic,
				isLoading,
				setIsLoading,
				comicId,
				setComicId,
				setComic,
			}}
		>
			{children}
			{isComicModalOpen && <ComicModal />}
		</ModalContext.Provider>
	);
}
