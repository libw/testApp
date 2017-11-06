import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image,DrawerLayoutAndroid } from 'react-native'



class Header extends React.Component {
    render() {

        return (
            <View style={styles.top}>
                <Text style={styles.topTitle}>水域</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    top:{
        height: 40,
        backgroundColor: '#EC403C',
    },
    topTitle:{
        marginTop: 15,
        marginLeft: 20,
        textAlign: 'left',
        fontSize: 14,
        color:'#FFF',
    }
})

export default Header;
