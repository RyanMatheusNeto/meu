import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const image = '../../assets/paisagem.jpg';

export default function Welcome() {
    const navigation = useNavigation();



    return (

        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/paisagem.jpeg')}
                style={styles.imageBackground}
            >       <View style={styles.bemvn}>
                    <Text style={styles.bemvindotext}>Bem estar em </Text>
                    <Text style={styles.numero2}>5</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Login') }}
                        style={styles.button}
                    >
                        <Text style={styles.buttontxt}>Acessar</Text>
                    </TouchableOpacity>
                
            </ImageBackground>
        </View>

    )
}






const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
    },
    numero2: {
        fontFamily: 'Roboto',
        fontSize: 55, // Ajuste conforme necessário
        color: '#FFF', // Ajuste a cor conforme necessário,
        alignSelf: 'center'
    },
    bemvindotext: {
        fontFamily: 'Roboto',
        fontSize: 55, // Ajuste conforme necessário
        color: '#FFF', // Ajuste a cor conforme necessário
        alignSelf: 'center'
    },
    contBem: {
        backgroundColor: '#FFF'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 100,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

    buttontxt: {
        justifyContent:'center',
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Roboto'

    },
    bemvn:{
        paddingBottom: 400
    }

})



