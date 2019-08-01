import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/container/Home';
import Movie from './screens/container/Movie'

const Main = createStackNavigator(
    {
        Home: {
            screen: Home,
        },        
        Movie: {
            screen: Movie,
        }
    }
    
    
)

export default createAppContainer(Main);