import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from '../src/AppNavigator';

const navigatorReducer = createNavigationReducer(AppNavigator);

export default navigatorReducer;