import {RootNavigator} from './navigation/RootStack';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
