import { useContext } from 'react';

import Spinner from 'react-spinkit';

import { IoIosArrowDropdownCircle } from 'react-icons/io';

import { CharacterContext } from '../../contexts/CharacterContext';
import CharacterItem from '../CharacterItemComponent/CharacterItem';

import './styles.css';

export function Characters() {
	const { isLoading, characters, handleMore } = useContext(CharacterContext);

	return isLoading ? (
		<div className='spinnerContainer'>
			<Spinner name='ball-spin-fade-loader' className='spinner' />
		</div>
	) : (
		<>
			<div className='charactersContainer'>
				{characters.map((item) => (
					<CharacterItem key={item.id} character={item} />
				))}
			</div>
			<div className='buttonMore'>
				<button onClick={handleMore}>
					<IoIosArrowDropdownCircle size={20} />
				</button>
			</div>
		</>
	);
}

export default Characters;
