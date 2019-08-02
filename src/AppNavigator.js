import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';

import Home from './screens/container/Home';
import Movie from './screens/container/Movie';
import Category from './screens/container/Category';
import About from './screens/container/About';
import Lucky from './screens/container/Lucky';
import Profile from './screens/container/Profile';
import Icon from './sections/components/Icon';

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
        Lucky: {
            screen: Lucky,
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

export default createAppContainer(tabNavigator);