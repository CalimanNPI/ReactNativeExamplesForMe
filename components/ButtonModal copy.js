import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  Dimensions,
  Pressable,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

const defaultProps = {
  title: "",
  //slide fade  none
  animationType: "slide",
  haveOutsideTouch: false,
  data: [],
};

const BottomPopup = ({
  show,
  title,
  animationType,
  closePopup,
  haveOutsideTouch,
}) => {
  return (
    <Modal
    animationType={animationType}
    transparent={true}
    visible={show}
    onRequestClose={() => { }}
  >
    <View style={{ flex: 1, backgroundColor: '#000000AA' }}>
      <Pressable
        onPress={() => {
          if (!haveOutsideTouch) return;
          closePopup()
        }}
        style={{ flex: 1 }}>

      </Pressable>

      <View style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        // height: Dimensions.get('window').height * 0.4,
        maxHeight: Dimensions.get('window').height * 0.4
      }}>
        <Text style={{
          alignSelf: 'center',
          color: '#182E44',
          fontSize: 20,
          fontWeight: '500',
          margin: 15
        }}>{title}</Text>
        {/*this.renderContent()*/}
      </View>
    </View>
  </Modal>
  );
};

export default BottomPopup;
