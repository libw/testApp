import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image,DrawerLayoutAndroid } from 'react-native'
import { StackNavigator } from 'react-navigation';
import axios from 'axios'


class Recommend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navlist: []
        }
    }
    componentDidMount(){
        var that = this
        axios.get('https://zhihu-daily.leanapp.cn/api/v1/themes')
            .then(function (response) {
                console.log(response.data.THEMES.others);
                that.setState({
                    navlist:response.data.THEMES.others
                })
            }).catch(function (error) {
            console.log(error);
        });
    }
    render(){
        return(
            <ScrollView style={styles.centent}>
                {
                    this.state.navlist.length===0?<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>{55555}</Text>:this.state.navlist.map((v,i)=>{return (<View key={i}>
                        <View  style={styles.cententLi}>
                            <Image source={{uri: v.thumbnail}} style={styles.cententImg} />
                            <View style={styles.rightCentent}>
                                <Text style={styles.cententTitle}>{v.name}</Text>
                                <Text style={styles.cententCentent}>{v.description}</Text>
                            </View>

                        </View>
                        <View style={styles.line}></View>
                    </View>)})}


            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    centent:{
        flex:1,
        flexDirection:'column',
        borderBottomWidth:1,
    },
    cententLi:{
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
    },
    cententImg:{
        width: 80,
        height: 80,
    },
    cententTitle:{
        fontSize: 18,
        color: '#232323',
        marginBottom: 3,
        fontWeight:'bold'
    },
    cententCentent:{
        fontSize: 12,
        marginTop:20
    },
    rightCentent:{
        flex: 1,
        paddingLeft: 5,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    cententType:{
        width: 40,
        height: 22,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    line:{
        height: 1,
        backgroundColor: '#E4E4E4',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 7,
        marginBottom: 7,
    }
})

export default Recommend;