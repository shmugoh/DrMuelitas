import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from './MainScreen';
import KnowMePage from './KnowMePage';
import ExplainMePage from './ExplainMePage';
import RemindMePage from './RemindMePage';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="KnowMePage" component={KnowMePage}/>
        <Stack.Screen name="ExplainMePage" component={ExplainMePage}/>
        <Stack.Screen name="RemindMePage" component={RemindMePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack