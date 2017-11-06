import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image,DrawerLayoutAndroid } from 'react-native'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { StackNavigator } from 'react-navigation';

const cententNav = ['头条', '热点', '娱乐', '体育', '财经'],
    NEW_DATA = [
        {
            img: "http://7xl041.com1.z0.glb.clouddn.com/new1.png",
            title: "李克强宴请上合各参会领导人",
            content: "称会议阐释了上合组织\“大家庭\”的深厚友谊和良好氛围",
            typeImg: "http://7xl041.com1.z0.glb.clouddn.com/new-type1.png",
            key:1
        },{
            img: "http://7xl041.com1.z0.glb.clouddn.com/new1.png",
            title: "李克强宴请上合各参会领导人",
            content: "称会议阐释了上合组织\“大家庭\”的深厚友谊和良好氛围",
            typeImg: "http://7xl041.com1.z0.glb.clouddn.com/new-type1.png",
            key:2
        },{
            img: "http://7xl041.com1.z0.glb.clouddn.com/new1.png",
            title: "李克强宴请上合各参会领导人",
            content: "称会议阐释了上合组织\“大家庭\”的深厚友谊和良好氛围",
            typeImg: "http://7xl041.com1.z0.glb.clouddn.com/new-type1.png",
            key:3
        },{
            img: "http://7xl041.com1.z0.glb.clouddn.com/new1.png",
            title: "李克强宴请上合各参会领导人",
            content: "称会议阐释了上合组织\“大家庭\”的深厚友谊和良好氛围",
            typeImg: "http://7xl041.com1.z0.glb.clouddn.com/new-type1.png",
            key:4
        },{
            img: "http://7xl041.com1.z0.glb.clouddn.com/new1.png",
            title: "李克强宴请上合各参会领导人",
            content: "称会议阐释了上合组织\“大家庭\”的深厚友谊和良好氛围",
            typeImg: "http://7xl041.com1.z0.glb.clouddn.com/new-type1.png",
            key:5
        },{
            img: "http://7xl041.com1.z0.glb.clouddn.com/new1.png",
            title: "李克强宴请上合各参会领导人",
            content: "称会议阐释了上合组织\“大家庭\”的深厚友谊和良好氛围",
            typeImg: "http://7xl041.com1.z0.glb.clouddn.com/new-type1.png",
            key:6
        }
    ]



class Home extends React.Component {


    render() {
        let navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>我是侧边导航栏</Text>
            </View>
        );
        return (
            <View style={styles.wrap}>
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}>
                    <Header/>
                    <View style={styles.cententWrap}>
                        <View style={styles.cententNav}>
                            {
                                cententNav.map(function(el, index){
                                    return <Text key={el} style={styles.cententNavText}>
                                        <Text key={el} style={index == 0 ? styles.textR : ""}>{cententNav[index]}</Text>
                                    </Text>

                                })
                            }
                        </View>
                        <ScrollView style={styles.centent}>
                            {
                                NEW_DATA.map(function(el, index){
                                    return (
                                        <View key={index}>

                                            <View  style={styles.cententLi}>
                                                <Image source={{uri: NEW_DATA[index].img}} style={styles.cententImg} />
                                                <View style={styles.rightCentent}>
                                                    <Text style={styles.cententTitle}>{NEW_DATA[index].title}</Text>
                                                    <Text style={styles.cententCentent}>{NEW_DATA[index].content}</Text>
                                                </View>
                                                <Image source={{uri: NEW_DATA[index].typeImg}} style={styles.cententType} />
                                            </View>
                                            <View style={styles.line}></View>

                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    <Footer/>
                </DrawerLayoutAndroid>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrap: {
        flex:1,
        flexDirection:'column'
    },
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
    },
    cententWrap:{
        flex:1,
        flexDirection:'column',
    },
    cententNav:{
        flexDirection: 'row',
        height: 20,
        marginLeft: 5,
        marginTop: 5,
        marginRight: 5,
    },
    cententNavText:{
        width: 60,
        fontSize: 14,
        color: '#9C9C9C',
        marginLeft: 10,
    },
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
        fontSize: 16,
        color: '#232323',
        marginBottom: 3,
    },
    cententCentent:{
        fontSize: 12,
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

    bottom:{
        height: 40,
    },

    text:{
        padding:10,
        fontSize:16,
        color:'#000',
        lineHeight:20,
        textAlign: 'center',
    },

    textR:{
        fontWeight: 'bold',
        color:'#EC403C',
    },
    line:{
        height: 1,
        backgroundColor: '#E4E4E4',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 7,
        marginBottom: 7,
    }

});

const SimpleApp = StackNavigator({
    Home: { screen: Home }
});

export default Home;
