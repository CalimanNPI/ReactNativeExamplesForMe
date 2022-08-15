import React, { Component, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

import BottomPopup from "./ButtonModal copy";
const popupList = [
  { id: 0, name: "Task" },
  { id: 1, name: "Message" },
  { id: 2, name: "Note" },
  { id: 3, name: "Share" },
];

const ModalFunction = () => {
  const [isShow, setIsShow] = useState(false);

  const _closePopup = () => {
    setIsShow(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 100,
        }}
      >
        <TouchableOpacity
          style={{
            width: 100,
            height: 40,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setIsShow(!isShow);
          }}
        >
          <Text style={{ color: "white" }}>Press me</Text>
        </TouchableOpacity>
        <BottomPopup
          show={isShow}
          title={"Demo Popup"}
          animationType={"fade"}
          closePopup={_closePopup}
          data={popupList}
          haveOutsideTouch={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default ModalFunction;
