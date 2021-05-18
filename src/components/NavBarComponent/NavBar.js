import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import {
	AiOutlineUser,
	AiOutlineBook,
	AiOutlineMenu,
	AiOutlineClose,
} from 'react-icons/ai';
import { IoIosArrowDropupCircle } from 'react-icons/io';

import logo from '../../assets/images/logo.svg';
import './styles.css';

export default function NavBar() {
	const [click, setClick] = useState(false);

	const [isVisible, setIsVisible] = useState(false);

	function toggleVisibility() {
		if (window.pageYOffset > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	function handleClick() {
		if (isMobile) {
			setClick(!click);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
	}, []);

	const isMobile = useMediaQuery({ query: '(max-device-width: 768px)' });
	return (
		<div className='headerContainer'>
			<div className={click ? 'mobileContent' : 'headerContent'}>
				<div className='menu' onClick={handleClick}>
					{click ? <AiOutlineClose /> : <AiOutlineMenu />}
				</div>
				<div>
					<Link to='/' onClick={scrollToTop}>
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
								scrollToTop();
							}}
						>
							<AiOutlineBook /> <span>Comics</span>
						</NavLink>
						<NavLink
							activeClassName='active'
							to='/characters'
							onClick={() => {
								handleClick();
								scrollToTop();
							}}
						>
							<AiOutlineUser /> <span>Characters</span>
						</NavLink>
					</nav>
				</div>
			</div>
			<div className='scroll-to-top'>
				{isVisible && (
					<button onClick={scrollToTop}>
						<IoIosArrowDropupCircle size={20} />
					</button>
				)}
			</div>
		</div>
	);
}
