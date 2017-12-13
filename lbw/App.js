import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image,DrawerLayoutAndroid } from 'react-native'
import RootTabs from './src/containers/home'
import { StackNavigator } from 'react-navigation';

class App extends React.Component {

    render() {
        return (
            <View style={styles.wrap}>
                <RootTabs/>
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
