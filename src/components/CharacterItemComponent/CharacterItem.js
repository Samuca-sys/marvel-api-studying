import { useState, useRef, useEffect } from 'react';

import './styles.css';

export default function CharacterItem(props) {
	const { character } = props;
	const { path, extension } = character.thumbnail;
	const { name, description } = character;

	const [isOpen, setIsOpen] = useState(false);

	const node = useRef();

	function handleOpenDetails() {
		setIsOpen(!isOpen);
	}

	const handleClick = (event) => {
		if (node.current.contains(event.target)) {
			return;
		}

		setIsOpen(false);
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);

	return (
		<div className='characterContainer'>
			<div ref={node} className='characterContent' onClick={handleOpenDetails}>
				<img
					src={`${path}.${extension}`}
					alt={name}
					className='character-thumbnail'
				/>

				<div className={isOpen ? 'moreDetails' : 'characterDetails'}>
					<h1>{name}</h1>
					{isOpen && (
						<div>
							<span>
								{description === '' ? '  No description.' : description}
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
