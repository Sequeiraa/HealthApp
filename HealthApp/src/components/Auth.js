import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const changeForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <View style={styles.view}>
      {isLogin ? (
        <LoginScreen changeForm={changeForm} />
      ) : (
        <RegisterScreen changeForm={changeForm} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: "80%",
    height: 240,
    marginTop: 50,
    marginBottom: 50,
  },
});
