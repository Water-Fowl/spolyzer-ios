import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import Modal from 'react-native-modal';
import {
    hideModal,
    fetchAddScore, }
from '../actions/score';
import { connect } from 'react-redux';

class ActionModal extends React.Component {
    constructor(props) {
        super(props);
        this.setScoreData.bind(this);
        this.hideModal.bind(this);
        this.setModalVisible.bind(this);
        this.state = { modalVisible: false }
    }

    hideModal(){
        const { dispatch } = this.props
        dispatch(hideModal())
        const { modal } = this.props
        console.log(modal)
        this.setState({modalVisible: modal})
    }

    setScoreData(action){
        const { position, side, dispatch } = this.props
        dispatch(fetchAddScore(position, action, side))
    }
    setModalVisible(){
        if (this.state.modalVisible){
            return{
                backgroundColor: 'blue'
            }
        }
        else{
            return {
                height: 0,
                opacity: 0
            }
        }
    }

    render(){
        const { modal, position, side } = this.props;
        return(
                <View
                    style={this.setModalVisible()}
                >
                    <View style={{ margin:40, alignItems:"center" }}>
                        <TouchableHighlight onPress={
                            () =>{
                                this.setScoreData(position, 0, side)
                                this.hideModal()
                            }
                        }>
                            <Text style={ styles.score_create_text }>ヘアピン</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={
                            () =>{
                                this.setScoreData(1)
                                this.hideModal()
                            }
                        }>
                            <Text style={ styles.score_create_text }>スマッシュ</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={
                            () =>{
                                this.setScoreData(2)
                                this.hideModal()
                            }
                        }>
                            <Text style={ styles.score_create_text }>クリアー</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={
                            () =>{
                                this.setScoreData(position, 3, side)
                                this.hideModal()
                            }
                        }>
                            <Text style={ styles.score_create_text }>ドライブ</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={
                            () =>{
                                this.setScoreData(position, 4, side)
                                this.hideModal()
                            }
                        }>
                            <Text style={ styles.score_create_text }>プッシュ</Text>
                        </TouchableHighlight>
                        { position != 0 && position != 6 ?(
                        <TouchableHighlight onPress={
                            () =>{
                                this.setScoreData(5)
                                this.hideModal()
                            }
                        }>
                            <Text style={ styles.score_create_text }>ロブ</Text>
                        </TouchableHighlight>
                        ):null
                        }
                        <TouchableHighlight onPress={
                            () =>{
                                this.setScoreData(6)
                                this.hideModal()
                            }
                        }>
                            <Text style={ styles.score_create_text }>ドロップ</Text>
                        </TouchableHighlight>
                        { position == 0 || position == 6 ?(
                        <View>
                        <TouchableHighlight onPress={
                            () =>{
                                this.setScoreData(7)
                                this.hideModal()
                            }
                        }>

                            <Text style={ styles.score_create_text }>ミス(スマッシュ)</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={
                            () =>{
                                this.setScoreData(8)
                                this.hideModal()
                            }
                        }>
                            <Text style={ styles.score_create_text }>ミス(ドライブ)</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={
                            () =>{
                                this.setScoreData(9)
                                this.hideModal()
                            }
                        }>
                            <Text style={ styles.score_create_text }>ミス(ドロップ)</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={
                            () =>{
                                this.setScoreData(10)
                                this.hideModal()
                            }
                        }>
                            <Text style={ styles.score_create_text }>ミス(ヘアピン)</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={
                            () =>{
                                this.setScoreData(11)
                                this.hideModal()
                            }
                        }>
                            <Text style={ styles.score_create_text }>ミス(プッシュ)</Text>
                        </TouchableHighlight>
                        </View>
                        ):null
                        }
                        <TouchableHighlight
                            onPress={() => {
                                this.hideModal()
                            }
                        }>
                            <Text style={{textAlign:"center",marginTop: 20, color:"white"}}>戻る</Text>
                        </TouchableHighlight>
                    </View>
                </View>
        )
    }
}

function mapStateToProps(state, props){
    const { score } = state
    const {
        modal:modal,
    } = score ||{
        modal: false,
    }
    return {
        modal,
    }
}

export default connect(mapStateToProps)(ActionModal)

const modalStyles = {
  modal : {
    width: 240,
    height: 160,
    backgroundColor: '#FFF'
  },
  overlay : {
    backgroundColor: 'rgba(0,0,0,0.6)'
  }
};

const styles = StyleSheet.create({
    align_items_center:{
        alignItems: "center",
    },
    score_create_field: {
        zIndex: 1,
    },
    score_game_create_score_text:{
        color:"white",
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft:5,
        marginRight:5,
        width: 50,
        textAlign:"center",
        backgroundColor: 'rgb(30, 110, 155)',
    },
    score_create_text: {
        padding: 5,
        margin: 5,
        width: 200,
        textAlign: "center",
        backgroundColor: "rgb(217, 55, 142)",
        fontWeight: 'bold',
        color: "white",
    },
    score_create_outcort_side: {
        zIndex:0,
        marginLeft:20,
        marginRight:20,
        marginBottom:0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    score_create_incort_side: {
        zIndex:0,
        marginLeft:10,
        marginRight:10,
        marginBottom:0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    score_create_outcort_length: {
    },
    score_create_incort_img: {
        zIndex:0,
        marginLeft: 15,
        marginRight: 15,
    },
    score_create_outcort_img: {
        marginLeft: 5,
        marginRight: 5,
    },
})
