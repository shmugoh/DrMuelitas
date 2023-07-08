import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './pages/MainScreen';
import KnowMePage from './pages/KnowMePage';
import ExplainMePage from './pages/ExplainMePage';
import RemindMePage from './pages/RemindMePage';

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
        <Stack.Screen name="KnowMePage" component={KnowMePage} options={{ title: 'Conoceme' }} />
        <Stack.Screen
          name="ExplainMePage"
          component={ExplainMePage}
          options={{ title: 'Explicame' }}
        />
        <Stack.Screen
          name="RemindMePage"
          component={RemindMePage}
          options={{ title: 'Recuerdame' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
