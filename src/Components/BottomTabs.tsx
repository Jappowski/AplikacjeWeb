
import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../screens/List';
import Home from '../screens/Home';



const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="List" component={List} />
        </Tab.Navigator>
    );
};
export default BottomTabs;

