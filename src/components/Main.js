import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import{styles} from '../styles/styles';

export default class Main extends Component{
    
    render(){

        return(
            <View style={styles.center}>
                <Text> Main Menu </Text>
                <Button title = 'Go to Feed' onPress = {()=> this.props.navigation.navigate('FeedRoute')} />
                <Button title = 'Go to Map' onPress = {()=> this.props.navigation.navigate('MapRoute')} />
                <Button title = 'Go to Login' onPress = {()=> this.props.navigation.navigate('LoginRoute')} />
                <Button title = 'Go to Signup' onPress = {()=> this.props.navigation.navigate('SignUpRoute')} />

            </View>

        )
    }

}