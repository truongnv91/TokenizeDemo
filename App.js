/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   BackHandler
 } from 'react-native';
 import { Provider } from 'react-redux';
 import configureStore from './src/redux/configureStore';
 import AppMain from './src/router'
 import SplashScreen from 'react-native-splash-screen';
 
 require('./I18n/I18n.js');
//  require('./src/utils/Global');
 
 const store = configureStore();
 
 class App extends React.PureComponent {
 
   render() {
     return (
       <Provider store={store}>
         <View style={{ flex: 1 }}>
           <AppMain />
         </View>
       </Provider>
     );
   }
 
   componentDidMount() {
     console.log('init App')
     SplashScreen.hide();
    //  store.dispatch({ type: 'initAppSetting' });
   }
 
 }
 
 export default App;
 