import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';

import Home from './screens/container/Home';
import Movie from './screens/container/Movie';
import Category from './screens/container/Category';
import About from './screens/container/About';
import Profile from './screens/container/Profile';
import Icon from './sections/components/Icon';
import Login from './screens/container/Login';
import Selector from './screens/container/Selector'


const Main = createStackNavigator(
    {
    // Dos formas diferentes de llamas a las rutas o pantallas
        Home: Home,
        Movie: Movie,
        Category
    },
)

const tabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Main,
            navigationOptions: {
                title: 'Inicio',
                tabBarIcon: <Icon icon=":)" />
            }      
        },
        About: {
            screen: About,
        },
        
        Profile: {
            screen: Profile,
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: '#65a721'
        }
    }
)

const Modal = createStackNavigator(
    {
        Main: {
            screen: tabNavigator
        },
        Movie: Movie,
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)

const switchNavigator = createSwitchNavigator(
    {
        Selector: Selector,
        App: Modal,
        Login: Login,
    },
    {
        initialRouteName: 'Selector'
    }
)

export default createAppContainer(switchNavigator);