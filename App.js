import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import * as Font from 'expo-font'
import { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import { SplashScreen } from 'expo-splash-screen';
import Navigator from './routes/drawer'
const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  
  
  useEffect(() => {
    async function prepare() {      
      //await SplashScreen.preventAutoHideAsync();
      try {
        // Your code to fetch fonts or perform any other async initialization
        await getFonts(); // Assuming you have a function called getFonts()
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  
  if (fontsLoaded) {
    return (
      // <Home />
      <Navigator />
    );
  } else {
    return (
      <Text>
        Loading...
      </Text>
      // <AppLoading
      //   startAsync={getFonts}
      //   onFinish={() => setFontsLoaded(true)}
      // />
    );
  }

}