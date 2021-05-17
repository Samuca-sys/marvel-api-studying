import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Search from '../SearchComponent/Search';

import {
	AiOutlineUser,
	AiOutlineBook,
	AiOutlineMenu,
	AiOutlineClose,
} from 'react-icons/ai';

import logo from '../../assets/images/logo.svg';
import './styles.css';

export default function NavBar() {
	const [click, setClick] = useState(false);

	function handleClick() {
		if (isMobile) {
			setClick(!click);
		}
	}

	const isMobile = useMediaQuery({ query: '(max-device-width: 768px)' });
	return (
		<div className='headerContainer'>
			<div className={click ? 'mobileContent' : 'headerContent'}>
				<div className='menu' onClick={handleClick}>
					{click ? <AiOutlineClose /> : <AiOutlineMenu />}
				</div>
				<div>
					<Link to='/'>
						<img
							className={click ? 'mobileLogo' : 'logoImage'}
							src={logo}
							alt={'logo'}
						/>
					</Link>
				</div>
				<div className={click ? 'mobileButtons' : 'buttons'}>
					<nav>
						<NavLink
							exact={true}
							activeClassName='active'
							to='/'
							onClick={() => {
								handleClick();
							}}
						>
							<AiOutlineBook /> <span>Comics</span>
						</NavLink>
						<NavLink
							activeClassName='active'
							to='/characters'
							onClick={() => {
								handleClick();
							}}
						>
							<AiOutlineUser /> <span>Characters</span>
						</NavLink>
					</nav>
				</div>
				<div className={!click ? 'searchInput' : 'noSearch'}>
					<Search />
				</div>
			</div>
		</div>
	);
}
