import { useState } from 'react';
import { Link } from 'react-router-dom';
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
				{/* <div className='headerContent'> */}
				<div class='menu' onClick={handleClick}>
					{click ? <AiOutlineClose /> : <AiOutlineMenu />}
				</div>
				<div>
					<img
						className={click ? 'mobileLogo' : 'logoImage'}
						// className='logoImage'
						src={logo}
						alt={'logo'}
					/>
				</div>
				<div className={click ? 'mobileButtons' : 'buttons'}>
					{/* <div className='buttons'> */}
					<nav>
						<Link to='/comics' onClick={handleClick}>
							<AiOutlineBook /> <span>Comics</span>
						</Link>
						<Link to='/characters' onClick={handleClick}>
							<AiOutlineUser /> <span>Characters</span>
						</Link>
					</nav>
				</div>
				<div className={!click ? 'searchInput' : 'noSearch'}>
					{/* <div> */}
					<Search />
				</div>
			</div>
		</div>
	);
}
