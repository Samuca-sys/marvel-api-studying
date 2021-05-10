import React from 'react';

import { ComicContextProvider } from './contexts/ComicContext';

import List from './components/ListComponent/List';
import Header from './components/HeaderComponent/Header';

import './global.css';

function App() {
	return (
		<ComicContextProvider>
			<Header />
			<List />
		</ComicContextProvider>
	);
}

export default App;
