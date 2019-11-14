import React from 'react'
import {createAppContainer, createSwitchNavigator}  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import { SafeAreaView, Button, View } from 'react-native';

import * as authActions from '../authentication/store/Action/auth'
import { useDispatch } from 'react-redux';


import AuthenticationMenu from '../authentication/AuthenticationMenu'
import SignUp from '../authentication/User/SignUpScreen'
import Login from '../authentication/User/LoginScreen'

import MainScreen from '../components/MainScreen'
import Title from '../components/Title'
import Feed from '../components/Feed'
import Menu from '../components/Main'
import myMap from '../components/myMap'
import CreateWorkspace from '../components/CreateWorkspace'

const Features = createStackNavigator(
    {
        MainRoute: Menu,
        TitleRoute: Title,
        FeedRoute: Feed,
        MainScreenRoute: MainScreen,
        MapRoute: myMap,
        CreateWorkspaceRoute: CreateWorkspace,
    },{
        defaultNavigationOptions: ({ navigation }) => ({
            headerRight: (
                  <Button
                    title="Logout"
                    onPress={() => navigation.navigate('Auth')}
                  />
            )
    }
    
)
    }
)



const Authentication = createStackNavigator(
    {
        AuthenticationMenu: AuthenticationMenu,
        SignUp: SignUp,
        Login:Login
    }
)

const MainNavigator = createSwitchNavigator({
    Auth: Authentication,
    Features: Features
})


export default createAppContainer(MainNavigator)