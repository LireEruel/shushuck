import React, { useState } from "react";
import { Alert } from "react-native";
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
import { Snackbar } from 'react-native-paper';

const SHUSHUCK = require("../../assets/img/shushuck.png");
import {COLORS} from "../styles/styles" 

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
        backgroundColor: COLORS.YELLOW.YELLOW,
        paddingVertical: 10,
        paddingHorizontal : 40,
        borderRadius:10
    },
    buttonText : {
        color: COLORS.WHITE.WHITE,
        fontSize: 20,
        fontWeight : 'bold'
    }
    
})


const HomeScreen = () => {
    const [text,setText] = useState('');
    const [visible, setVisible] = useState(false);
    const [resultText, setResultText] = useState('');
    const onPress = () => {
            if(text == '')
            {
               setVisible(true)
            }
            else{
                    makeText();
            }
        
        }   
    const makeText = () => {
        const inputArray = text.split(''); // input을 스플릿하여 배열로 저장
        const transArray = [];  // input가중치를 높이고 . , ' ' 를 추가한 배열
        const resultArray = [];
        const textLength = 50;
        //슈슉이 input이라면 슈와 슉의 가중치를 높이기 위해 배열에 2번 넣음.

        for(var i =0;i<3;i++)
        {
            for( var d=0; d<inputArray.length;d++)
            {
                transArray.push(inputArray[d])
            }
        }
        transArray.push('.',',',' ');
        resultArray.push(transArray[0]) // 첫번째 글자는 input의 첫번째 글자로
        while(resultArray.length < textLength-1)
        {
            const index = Math.floor(Math.random() * (transArray.length -1) + 1) // 배열에서 랜덤으로 하나를 뽑는다.       
            var before = resultArray[resultArray.length-1]
             // ' ' 와 , 와 , . 는 반복되지 않도록 한다.
            if(before == transArray[index] )
            {
                if(before == ' ' || ',' || '.')
                {
                    continue;
                }
            }
            
            resultArray.push(transArray[index])
        }
        resultArray.push
        const resultText = resultArray.join("");
        console.log(resultText);
    } 
    
    return(
        <View style={classes.container}>
            <View style={classes.content}>
                <Text style={classes.title}>나만의 밈을 만들어보세요</Text>
                <TextInput style={classes.input}
                    placeholder="ex) 슈슉"
                    onChangeText={text => setText(text)}
                />
            </View>
            <Image
                source={SHUSHUCK}
                style={classes.image}
            />
            <TouchableOpacity style={classes.button} onPress={onPress}>
                <Text style={classes.buttonText}>Go!</Text>
            </TouchableOpacity>
            <Snackbar
                visible={visible}
                onDismiss={() => setVisible(false)}
                >
                입력값이 없습니다.
            </Snackbar>
        </View>
    )
}

export default HomeScreen