import { useContext } from 'react';

import { ModalContext } from '../../contexts/ModalContext';

import './styles.css';

export default function ComicItem(props) {
	const { comic } = props;
	const { path, extension } = comic.thumbnail;
	const { title, pageCount, prices, id } = comic;
	const { setComicId } = useContext(ModalContext);
	const price = prices[0].price * 5.24;

	return (
		<div
			className='itemContainer'
			onClick={() => {
				setComicId(id);
			}}
		>
			<div className='itemContent'>
				<div className='comic-thumbnail-container'>
					<img
						src={`${path}.${extension}`}
						alt={title}
						className='comic-thumbnail'
					/>
				</div>
				<div>
					<h1>{title}</h1>
					<div className='itemDetails'>
						<div>
							<strong>Pages:</strong>
							<span>{pageCount === 0 ? 'Not available' : pageCount}</span>
						</div>

						<div>
							<strong>Price:</strong>
							<span>
								{price === 0.0
									? '  Not available'
									: price.toLocaleString('pt-BR', {
											style: 'currency',
											currency: 'BRL',
									  })}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
