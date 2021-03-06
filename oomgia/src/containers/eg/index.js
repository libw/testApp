import React, { Component} from 'react';
import  {
    AppRegistry,
    View,
    Modal,
    TouchableOpacity,
    Text
} from 'react-native';
 class Eg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }
    setModalVisible = (visible)=> {
        this.setState({
            modalVisible: visible
        })
    };
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffaaff'}}>
                <Modal animationType={'none'}
                       transparent={true}
                       visible={this.state.modalVisible}
                       onrequestclose={() => {alert("Modal has been closed.")}}
                       onShow={() => {alert("Modal has been open.")}}
                       supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
                       onOrientationChange={() => {alert("Modal has been OrientationChange.")}}>
                    <View style={{flex:1, marginTop: 22, backgroundColor: '#aaaaaa', justifyContent: 'center', alignItems: 'center'}}>
                        <View>
                            <Text>Hello World!</Text>
                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(false)
                            }}>
                                <Text>隐藏 Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text>显示 Modal</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Eg;
