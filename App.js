



import Register from './Register'
import {createStackNavigator,createAppContainer, } from "react-navigation";

const AppNavigator = createStackNavigator({
 
  
 
  Registerdetails:{
    screen:Register
  }
  },
   {
      initialRouteName: 'Registerdetails',
      /* The header config from HomeScreen is now here */
      defaultNavigationOptions: {
        headerStyle: { 
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    });
  
  
    export default createAppContainer(AppNavigator);
  