import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

const rock = require('./img/rock.png');
const scissors = require("./img/scissors.png");
const paper = require("./img/paper.png");


const BgColors = ['#1abc9c', '#3498db', '#9b59b6'];
    
    
const randomImg = () => {
    const emojis = [rock, paper, scissors];
    const random = Math.floor(Math.random() * 3);
    return emojis[random ]
}


const PlayScreen = () => {
    const [counter, setCounter] = useState(3);
    useEffect(() => {
        
        if (counter < 1) return;

        const timer = setTimeout(() => {
            setCounter((prv) => prv - 1)
        }, 500);

        return () => {
            clearTimeout(timer)
        };
    }, [counter])

    return (
      <View style={StyleSheet.compose({backgroundColor: BgColors[counter-1]}, styles.container)}>
        {counter < 1 ? (
          <>
            <Image style={styles.sign} source={randomImg()} />
            <View style={styles.button}>
              <Button onPress={() => setCounter(3)} title="Play Again" />
            </View>
          </>
        ) : (
          <Text style={styles.counter}>{counter}</Text>
        )}
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    counter: {
        fontSize: 150,
        color:"white"

    },
    sign: {
        width: 220,
        height: 220,
    },
    button: {
        position: "absolute",
        bottom:40,
    }
})

export default PlayScreen;
