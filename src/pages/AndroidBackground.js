import { NativeModules } from 'react-native';

const BackgroundTaskModule = NativeModules.BackgroundTaskModule;

// Trigger the broadcast event to open the app
BackgroundTaskModule.triggerOpenApp();
