import { connect } from'react-redux';
import { createReduxContainer } from'react-navigation-redux-helpers';
import AppNavigator from'./AppNavigator';

const AppNavigatorWithState = createReduxContainer(AppNavigator);

const mapStateToProps = state => ({
    // state.navigationreducer viene del indexReducer
    state: state.NavigationReducer
})

export default connect(mapStateToProps)(AppNavigatorWithState);
