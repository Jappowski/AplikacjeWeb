import React, {FC} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Home from './screens/Home';
import List from './screens/List'
import BottomTabs from './Components/BottomTabs'

interface IMainProps { }
 const Stack = createStackNavigator();
    const Main: FC<IMainProps> = props => {
    return (
        <NavigationContainer>{
            <BottomTabs />
        }</NavigationContainer>
    );
}
export default Main;