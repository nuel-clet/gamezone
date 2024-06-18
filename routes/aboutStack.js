import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about"
import Home from "../screens/home";

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'GameZone',            
        }
    },    
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#333', height: 60 }
    }
});

export default AboutStack;