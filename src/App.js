import React from 'react';
import {Home} from './screens/Home';
import {Logger} from './screens/Logger';
import {Menu} from './screens/Menu';
import {Documents} from './screens/Documents';
import {TabButton} from './components/Tab';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {enableScreens} from 'react-native-screens';

enableScreens();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarButton: props => <TabButton label="home" {...props} />,
          }}
        />
        <Tab.Screen
          name="Logger"
          component={Logger}
          options={{
            tabBarButton: props => <TabButton label="logger" {...props} />,
          }}
        />
        <Tab.Screen
          name="Documents"
          component={Documents}
          options={{
            tabBarButton: props => <TabButton label="documents" {...props} />,
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarButton: props => <TabButton label="menu" {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
