import Search from '../SearchComponent/Search';

import logo from '../../assets/images/logo.svg';
import './styles.css';

export default function Header() {
	return (
		<header className='headerContainer'>
			<div className='headerContent'>
				<img className='logoImage' src={logo} alt={'logo'} />
				<Search />
			</div>
		</header>
	);
}
