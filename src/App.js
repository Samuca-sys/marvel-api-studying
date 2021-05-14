import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ModalContextProvider } from './contexts/ModalContext';
import { ComicContextProvider } from './contexts/ComicContext';

import Routes from './routes/Routes';
import NavBar from './components/NavBarComponent/NavBar';

import './global.css';

function App() {
	return (
		<ModalContextProvider>
			<ComicContextProvider>
				<BrowserRouter>
					<NavBar />
					<Routes />
				</BrowserRouter>
			</ComicContextProvider>
		</ModalContextProvider>
	);
}

export default App;
