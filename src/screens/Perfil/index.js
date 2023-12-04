import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image  } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { ProgressBarAndroidBase } from "react-native";


export const Perfil = () => {

        const {navigate} = useNavigation(); //importante
        const imagePath = require('../../assets/perfil.png');

        const handleStart = (task) => {
            navigation.navigate('TimerScreen', { task, imagePath });
        };

    let [fontsLoaded] = useFonts({
        'Roboto': require('../../fonts/Roboto-regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View><Text>Carregando...</Text></View>; // ou algum outro indicador de carregamento
    }

    return (

        

           
        <LinearGradient colors={['#005227', '#8DDCE5', '#a4fff7']} style={styles.container}>

            <View style={styles.imagemcont}>
                <Image
                     source={require('../../assets/perfil.png')}
                         style={styles.imagem}
                 />
                </View>

            <View>

                <View>
                    <Text style={styles.meta}>Meta do dia: </Text>
                </View>
                <View>
                    <Text style={styles.metaStatus}>Status</Text>
                </View>

                <View>
                    <Text style={styles.metaok}>0/6 </Text>
                </View>
                
               
            
            </View>
            
            <View style={styles.iniciarContainer}>
            <TouchableOpacity  onPress={() => navigate('Tarefas')}>
                <Text style={styles.iniciar}>Começar</Text>
            </TouchableOpacity>
            </View>
           
           
        </LinearGradient>
       
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        
         // para centralizar o conteúdo
    },
    meta:{
        fontSize: 50,
        color: '#000',
        fontFamily: 'Roboto'
    },
    metaok:{
        marginTop: 50,
        fontSize: 50,
        color: '#000',
        fontFamily: 'Roboto',
        alignSelf:'center'
    },
    metaStatus:{
        alignSelf:"center",
        marginTop: 30,
        fontSize: 25,
        color: '#000',
        fontFamily: 'Roboto'
    },
    topContent:{
        flex: 1,
        
        alignItems: 'center',
    },
    texto1: {
        padding: 30,
        marginTop: 150,
        fontFamily: 'Roboto',
        fontSize: 40, // Ajuste conforme necessário
        color: '#114A55', // Ajuste a cor conforme necessário
    },
    numero2: {
        fontFamily: 'Roboto',
        fontSize: 55, // Ajuste conforme necessário
        color: '#114A55', // Ajuste a cor conforme necessário
    },
    iniciarContainer: {
       
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 150, // Para centralizar horizontalmente
        marginBottom: 120, // Espaço na parte inferior
        borderWidth: 3,
        borderColor: '#8DDCE5',
        backgroundColor: '#8DDCE5',
        padding: 5,
        borderRadius:30,
    },
    iniciar: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color:'#114A55'
        
    },
    imagem: {
        borderRadius: 100,
        width: 200,
        height: 200,

    },
    imagemcont:{
        paddingTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    }
});

export default Perfil;
