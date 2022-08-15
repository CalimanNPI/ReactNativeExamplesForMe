import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Modal from "./components/Modal";
import ModalFunction from "./components/ModalFunction";
import HorizontalScroll from "./components/HorizontalScroll";
import HomeScreen from "./components/home/HomeScreen";
import HorizontalScroll2 from "./components/HorizontalScroll copy";
//import Carusel3DScroll  from "./components/Carusel3DScroll ";

export default function App() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
