import React from 'react';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './src/navigation';
import {Provider} from 'react-redux';
import {persistor, store, RootState} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nextProvider} from 'react-i18next';
import i18n from 'src/i18n';
import Toast, {ToastProvider} from 'react-native-toast-notifications';
import Colors from '@common/colors';

import './global.css';

// import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScaleWidth} from '@common/fitSize';
const App: React.FC = () => {
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const renderCustomToast = toast => {
    return (
      <View style={styles.toastBox}>
        {toast?.type == 'danger' ? toast?.dangerIcon : toast?.successIcon}
        <Text
          numberOfLines={2}
          style={[
            styles.toastMessage,
            {
              color: toast?.type == 'danger' ? Colors.red : Colors.green,
            },
          ]}>
          {toast.message}
        </Text>
      </View>
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <ToastProvider>
            <AppNavigator />
            {/* <Toast
              ref={ref => (global.toast = ref)}
              placement="top"
              duration={5000}
              animationType="zoom-in"
              animationDuration={250}
              successIcon={
                <AntDesign
                  name={'checkcircle'}
                  size={25}
                  color={Colors.green}
                />
              }
              dangerIcon={
                <AntDesign name={'closecircleo'} size={25} color={Colors.red} />
              }
              textStyle={{fontSize: 16, color: Colors.green}}
              offset={50}
              offsetTop={30}
              swipeEnabled={true}
              renderToast={renderCustomToast}
            /> */}
          </ToastProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  toastBox: {
    padding: 15,
    backgroundColor: Colors.gray,
    width: ScaleWidth('90%'),
    borderRadius: ScaleWidth(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: ScaleWidth(10),
  },
  toastMessage: {
    fontSize: 15,
    fontWeight: '500',
    paddingStart: ScaleWidth(5),
    color: Colors.red,
  },
});

export default App;
