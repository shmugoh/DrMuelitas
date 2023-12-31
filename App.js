import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './src/pages/MainScreen.js';
import KnowMePage from './src/pages/KnowMePage.js';
import ExplainMePage from './src/pages/ExplainMePage.js';
import RemindMePage from './src/pages/RemindMePage.js';
import WelcomeBottom from './src/pages/WelcomeBottom.js';

import styles from './src/styles.js';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerLargeTitle: true,
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 32 },
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'DrMuelitas' }} />
        <Stack.Screen name="KnowMePage" component={KnowMePage} options={{ title: 'Conóceme' }} />
        <Stack.Screen
          name="ExplainMePage"
          component={ExplainMePage}
          options={{ title: 'Explícame' }}
        />
        <Stack.Screen
          name="RemindMePage"
          component={RemindMePage}
          options={{ title: 'Recuérdamelo' }}
        />
      </Stack.Navigator>
      <WelcomeBottom />
    </NavigationContainer>
  );
};

export default MyStack;
