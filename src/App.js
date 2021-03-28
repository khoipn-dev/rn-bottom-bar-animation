import React from 'react';
import {Home} from './screens/Home';
import {Logger} from './screens/Logger';
import {Menu} from './screens/Menu';
import {Documents} from './screens/Documents';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {enableScreens} from 'react-native-screens';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AddButtonBottomTab} from './components/AddButtonBottomTab';
import styled from 'styled-components/native';

const Container = styled.TouchableWithoutFeedback``;

const Background = styled.View`
  flex: auto;
  justify-content: center;
  align-items: center;
`;

const TabBarButton = ({onPress, children}) => {
  return (
    <Container onPress={onPress}>
      <Background>{children}</Background>
    </Container>
  );
};

enableScreens();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}>
        <Tab.Screen
          name="ScreenOne"
          component={Home}
          options={{
            tabBarButton: props => {
              return (
                <TabBarButton {...props}>
                  <Icon name="book-medical" size={24} color="#CDCCCE" />
                </TabBarButton>
              );
            },
          }}
        />
        <Tab.Screen
          name="ScreenTwo"
          component={Logger}
          options={{
            tabBarButton: props => {
              return (
                <TabBarButton {...props}>
                  <Icon name="heartbeat" size={24} color="#CDCCCE" />
                </TabBarButton>
              );
            },
          }}
        />
        <Tab.Screen
          name="ScreenThree"
          component={Logger}
          options={{
            tabBarButton: props => <AddButtonBottomTab {...props} />,
          }}
        />
        <Tab.Screen
          name="ScreenFour"
          component={Documents}
          options={{
            tabBarButton: props => {
              return (
                <TabBarButton {...props}>
                  <Icon name="band-aid" size={24} color="#CDCCCE" />
                </TabBarButton>
              );
            },
          }}
        />
        <Tab.Screen
          name="ScreenFive"
          component={Menu}
          options={{
            tabBarButton: props => {
              return (
                <TabBarButton {...props}>
                  <Icon name="user" size={24} color="#CDCCCE" />
                </TabBarButton>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
