import {AppState} from './AppState';
import type {ChangeLocaleActions} from './actions';
import {NativeModules, Platform} from 'react-native';

const initialState: AppState = {
  locale: {
    isoCode:
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier, // Android
  },
};

export const rootReducer = (
  state: AppState = initialState,
  action: ChangeLocaleActions,
) => {
  return state;
};
