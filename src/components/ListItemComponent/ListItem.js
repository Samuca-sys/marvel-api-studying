import React from 'react';

import './styles.css';

class ListItem extends React.Component {
	render() {
		const { comic } = this.props;
		const { path, extension } = comic.thumbnail;
		const { title, issueNumber, pageCount, dates, prices } = comic;
		return (
			<div className='itemContainer'>
				<div className='itemContent'>
					<div className='comic-thumbnail-container'>
						<img
							src={`${path}.${extension}`}
							alt={title}
							className='comic-thumbnail'
						/>
					</div>
					<div>
						<h3>{title}</h3>
						<p>
							<strong>Issue:</strong> {issueNumber}
						</p>
						<p>
							<strong>Pages:</strong> {pageCount}
						</p>
						<p>
							<strong>Date:</strong>
							{new Date(dates[0].date).toLocaleDateString()}
						</p>
						<p>
							<strong>Price:</strong> ${prices[0].price}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ListItem;
