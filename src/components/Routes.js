import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "../telas/index";
import Contato from "../telas/Contato";
import Membros from '../telas/Membros';
import Login from '../telas/Login';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return <NavigationContainer>
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#5A97D6",
            tabBarInactiveTintColor: "#FFF",
            tabBarActiveBackgroundColor: "#EEAF37",
            headerShown: false, 
            tabBarShowLabel: false, 
            tabBarHideOnKeyboard: true,
            tabBarStyle: { position: 'absolute', backgroundColor: "#FDB833", height: 60 }}}>
            
            <Tab.Screen name='Home' component={Home} options={{tabBarIcon: ({color}) => 
                (<MaterialCommunityIcons name="home" size={40} color={color} />),}}/>
            <Tab.Screen name='Contato' component={Contato} options={{tabBarIcon: ({color}) => 
                (<MaterialCommunityIcons name="email" size={40} color={color} />),}}/>
            <Tab.Screen name='Membros' component={Membros} options={{tabBarIcon: ({color}) => 
                (<MaterialCommunityIcons name="account-group" size={40} color={color} />),}}/>
             <Tab.Screen name='Login' component={Login} options={{tabBarIcon: ({color}) => 
                (<MaterialCommunityIcons name="lock-open" size={40} color={color} />),}}/>
        </Tab.Navigator>
    </NavigationContainer>
}