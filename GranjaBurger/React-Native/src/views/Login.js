import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import * as Google from "expo-google-app-auth";

const Login = ({ navigation }) => {

    /*
    const signInAsync = async () => {
        console.log("LoginScreen.js 6 | loggin in");
        try {
          const { type, user } = await Google.logInAsync({
            iosClientId: `<YOUR_IOS_CLIENT_ID>`,
            androidClientId: `<YOUR_ANDROID_CLIENT_ID>`,
          });
    
          if (type === "success") {
            // Then you can use the Google REST API
            console.log("LoginScreen.js 17 | success, navigating to profile");
            navigation.navigate("Drawer", { user });
          }
        } catch (error) {
          console.log("LoginScreen.js 19 | error with login", error);
        }
      };
      */

    const onPress = () => {
        navigation.navigate("Drawer", { nombre: 'hola' })
    }

    return (
        <View>
            <Text>Login</Text>
            <TouchableOpacity
                onPress={onPress}
                style={styles.button}
            >
                <Text>Ingresar por google</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });
