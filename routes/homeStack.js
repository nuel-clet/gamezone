import { createStackNavigator } from "react-navigation-stack";
import ReviewDetails from "../screens/reviewDetails";
import Home from "../screens/home";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',            
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Zone',             
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#333', height: 60 }
    }
});

export default HomeStack;