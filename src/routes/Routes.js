import { Switch, Route } from 'react-router-dom';

import Comics from '../components/ComicsComponent/Comics';
import Characters from '../components/CharactersComponent/Characters';

export default function Routes() {
	return (
		<Switch>
			<Route path='/' exact={true} component={Comics} />
			<Route path='/comics' component={Comics} />
			<Route path='/characters' component={Characters} />
		</Switch>
	);
}
