import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({ 
      body: {
        width: '100%',
        height: '100%',
        backgroundColor:'#404040',
        justifyContent: 'center',
        alignItems: 'center',
      },

      conteudo: {
          alignContent: 'center',
          margin: '5%',
          marginTop: '20%',
          maxWidth: '100%',
          width: 350,
      },

      titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#af4dff',
        marginBottom: 50,
      },

      texto: {
        fontSize: 20,
        color: '#999999',
        marginBottom: 5,
      },

      input:{
        marginBottom: 40,
        padding: 15,
        borderWidth: 1,
        borderColor: '#af4dff',
        fontSize: 15,
        borderRadius: 15,
        color: 'white',
      },

      botao:{
        backgroundColor:'#af4dff',
        marginBottom: 10,
        borderRadius: 8,
        textAlign: 'center',
        width: '50%',
        marginRight: 5,
      },
      botao2:{
        backgroundColor:'#af4dff',
        marginBottom: 10,
        borderRadius: 8,
        textAlign: 'center',
        width: '100%',
        marginRight: 5,
      },
      textoBotao: {
        fontSize: 20,
        color: '#ffffff',
        marginBottom: 5,
      },
      imgLogo: {
        resizeMode: "contain", height: 220, width: 200, 
    },
    logo:{
      justifyContent: 'center',
      alignItems: 'center',
      
    },

    botoes:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },

    usuario:{
      marginTop: 20, 
      marginBottom: 20, 
      fontSize: 23,
      textAlign: 'center',
      color: 'white',
    },

});