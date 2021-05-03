import React from 'react';

import { api } from './services/api';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comics: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		api.get('comics').then((res) => {
			const data = res.data;
			this.setState({
				comics: data,
				isLoading: false,
			});
		});
	}
	render() {
		const { comics, isLoading } = this.state;
		return (
			<>
				{isLoading ? (
					<h1>Loading...</h1>
				) : (
					<div className='App'>
						{comics.results.map((comic, index) => (
							<div key={index}>
								<p>{comic.title}</p>
								<img
									src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
									alt={comic.title}
								/>
							</div>
						))}
					</div>
				)}
			</>
		);
	}
}

export default App;
