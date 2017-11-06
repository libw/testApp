import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image,DrawerLayoutAndroid } from 'react-native'



class Footer extends React.Component {

    render() {

        return (
            <View style={styles.bottom}>
                <Text style={styles.text}>
                    尾部信息
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    bottom:{
        height: 40,

    },

    text:{
        padding:10,
        fontSize:16,
        color:'#000',
        lineHeight:20,
        textAlign: 'center'
    },
})

export default Footer;
