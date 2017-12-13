import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image,DrawerLayoutAndroid } from 'react-native'
import { StackNavigator } from 'react-navigation';
import axios from 'axios'


class Daily extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navlist: []
        }
    }
    componentDidMount(){
        var that = this
        axios.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories')
            .then(function (response) {
                console.log(response.data.STORIES.stories);
                that.setState({
                    navlist:response.data.STORIES.stories
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
                            <Image source={{uri: v.images}} style={styles.cententImg} />
                            <View style={styles.rightCentent}>
                                <Text style={styles.cententTitle}>{v.title}</Text>
                                <Text style={styles.cententCentent}>{v.id}</Text>
                            </View>

                        </View>
                        <View style={styles.line}></View>
                    </View>)})}


            </ScrollView>
        )
    }
}

export default Daily;