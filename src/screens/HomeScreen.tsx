import React, { useState } from "react";
import {
  Dimensions,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

const SHUSHUCK = require("../../assets/img/shushuck.png");


const Layout = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const classes = StyleSheet.create({
    container : {
        flex:1,
                alignContent: "center",
        alignItems:"center",
    },
    content : {
        alignContent: "center",
        alignItems:"center",
        paddingTop : Layout.height*0.15,
    },
    title : {
        fontSize: 40,
    },
    input : {
        height: 60,
        fontSize: 30,
        borderWidth: 1,
        borderRadius: 10,
        textAlign:'center',
        width: Layout.width*0.8,
        marginVertical: Layout.height*0.07
    },
    image : { 
        width: 300, 
        height: 300 
    },
    button : {
        marginTop : Layout.height*0.05,
    }
    
})


const HomeScreen = () => {
    const [text,setText] = useState('슈슉');
    
const onPress = () => {
        console.log(text);
    }    
  
    return(
        <View style={classes.container}>
            <View style={classes.content}>
                <Text style={classes.title}>나만의 밈을 만들어보세요</Text>
                <TextInput style={classes.input}
                    placeholder="슈슉"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
            </View>
            <Image
                source={SHUSHUCK}
                style={classes.image}
            />
            <TouchableOpacity style={classes.button} onPress={onPress}>
                <Text>Go!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen