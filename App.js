import React, {useEffect} from 'react';
import {StatusBar, View, SafeAreaView, Platform, LogBox} from 'react-native';
import {STATUS_BAR, EY_BLACK} from './src/constants/Color';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import MainNavigator from './src/navigation/MainNavigator';
import RNBootSplash from 'react-native-bootsplash';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: EY_BLACK,
  },
};

const statusBarIOS = () => {
  if (Platform.OS === 'ios') {
    return <View style={{backgroundColor: STATUS_BAR, height: 50}} />;
  }

  return null;
};

const App = () => {
  useEffect(() => {
    const init = async () => {
      RNBootSplash.show();
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });

    return () => init;
  }, []);

  return (
    <PaperProvider theme={theme}>
      <View style={{flex: 1}}>
        {statusBarIOS()}
        <SafeAreaView style={{flex: 1}}>
          <StatusBar backgroundColor={STATUS_BAR} barStyle={'light-content'} />
          <MainNavigator />
        </SafeAreaView>
      </View>
    </PaperProvider>
  );
};

export default App;

LogBox.ignoreAllLogs(true);
