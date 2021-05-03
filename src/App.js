import React from 'react';

import List from './components/ListComponent/List';
import Header from './components/HeaderComponent/Header';

import './global.css';

class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<List />
			</>
		);
	}
}

export default App;
