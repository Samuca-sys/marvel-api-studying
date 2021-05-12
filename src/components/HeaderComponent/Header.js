import { Link } from 'react-router-dom';

import Search from '../SearchComponent/Search';

import { AiOutlineUser, AiOutlineBook } from 'react-icons/ai';

import logo from '../../assets/images/logo.svg';
import './styles.css';

export default function Header() {
	return (
		<header className='headerContainer'>
			<div className='headerContent'>
				<div>
					<img className='logoImage' src={logo} alt={'logo'} />
					<nav>
						<Link to='/comics'>
							<AiOutlineBook /> <span>Comics</span>
						</Link>
						<Link to='/characters'>
							<AiOutlineUser /> <span>Characters</span>
						</Link>
					</nav>
				</div>
				<Search />
			</div>
		</header>
	);
}
