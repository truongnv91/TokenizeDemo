
import { createAppContainer } from 'react-navigation';
import { createStackNavigator,TransitionPresets } from 'react-navigation-stack';

import Login from '../component/login';
import MainApp from '../component/main';

const AppNavigator = createStackNavigator(
  {
    Login,
    MainApp
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login'
  }
);


export default createAppContainer(AppNavigator);
