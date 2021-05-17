import { useContext } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import { ModalContext } from '../../contexts/ModalContext';

import Spinner from 'react-spinkit';

import './styles.css';

export function ComicModal() {
	const { closeComicModal, isLoading, comic } = useContext(ModalContext);

	const { path, extension } = comic[0].thumbnail;
	const { title, issueNumber, pageCount, dates, prices, description } =
		comic[0];

	const characters = comic[0].characters.items;
	const price = prices[0].price * 5.24;

	return (
		<div className='overlay' onClick={closeComicModal}>
			<div className='modalContainer'>
				<button type='button' onClick={closeComicModal}>
					<AiOutlineClose className='closeIcon' />
				</button>
				{isLoading || comic === [] ? (
					<div className='spinnerContainer'>
						<Spinner name='ball-spin-fade-loader' className='spinner' />
					</div>
				) : (
					<div className='modalContent'>
						<img src={`${path}.${extension}`} alt={title} />
						<div className='info'>
							<header>
								<h1>{title}</h1>
							</header>
							<main>
								<p>{description}</p>
								<div className='modalDetails'>
									<div>
										<strong>Issue:</strong> <span>{issueNumber}</span>
									</div>
									<div>
										<strong>Date:</strong>
										<span>{new Date(dates[0].date).toLocaleDateString()}</span>
									</div>
									<div>
										<strong>Pages: </strong>
										<span>{pageCount}</span>
									</div>
									<div>
										<strong>Price: </strong>{' '}
										<span>
											{price.toLocaleString('pt-BR', {
												style: 'currency',
												currency: 'BRL',
											})}
										</span>
									</div>
								</div>
							</main>

							<footer>
								{characters.map((item, i, arr) => {
									if (arr.length - 1 === i) {
										return <span key={item.name}>{item.name} </span>;
									}
									return <span key={item.name}>{item.name} * </span>;
								})}
							</footer>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
