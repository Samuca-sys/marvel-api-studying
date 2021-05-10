import React from 'react';

import { ModalContextProvider } from './contexts/ModalContext';
import { ComicContextProvider } from './contexts/ComicContext';

import List from './components/ListComponent/List';
import Header from './components/HeaderComponent/Header';

import './global.css';

function App() {
	return (
		<ModalContextProvider>
			<ComicContextProvider>
				<Header />
				<List />
			</ComicContextProvider>
		</ModalContextProvider>
	);
}

export default App;
