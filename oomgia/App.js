import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image,DrawerLayoutAndroid } from 'react-native'
import Home from './src/containers/home'
import { StackNavigator } from 'react-navigation';

class App extends React.Component {

    render() {
        return (
            <View style={styles.wrap}>
                <Home/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex:1,
        flexDirection:'column'
    },
});

export default App;
