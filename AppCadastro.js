
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image, Switch} from 'react-native';
import styles from './estilos/estilo';
import firebase from './firebaseConnect';
import imgLogo from './assets/logo.png';
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

console.disableYellowBox=true;

export default function App(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function cadastrar(){
    if(nome !== '' & email !== ''){

      await firebase.auth().createUserWithEmailAndPassword(email, senha)

      .then((value)=> {
        //alert(value.user.uid);
        firebase.database().ref('Usuarios').child(value.user.uid).set({
          nome: nome
        })

        alert('Usuario criado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
    })
    .catch((error)=>{
      alert('Algo deu errado!');
    })

    
      setEmail('');
      setNome('');
      setSenha('');
    }
  }

  return(
    <View style={styles.body}>
      <View style={styles.form}>
        <View style={styles.conteudo}>
          <View ><Text style={styles.titulo}>Cadastro</Text></View>

            <Text style={styles.texto}>Nome</Text>
              <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={(texto) => setNome(texto) }
              value={nome}
              />

            <Text style={styles.texto}>E-mail</Text>
              <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={(texto) => setEmail(texto) }
              value={email}
              />

            <Text style={styles.texto}>Senha</Text>
              <TextInput secureTextEntry = "true"
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={(texto) => setSenha(texto) }
              value={senha}
              />

            <Form.Check style={{color: '#999999'}}
                type="switch"
                id="custom-switch"
                label="Aceito que o site armazene meus dados para o acesso."
            /><br/>

              <View style={styles.botoes}>

                <TouchableOpacity style={styles.botao2} onPress={cadastrar}>
                  <Text style={styles.textoBotao}>Salvar</Text>
                </TouchableOpacity>

              </View>

              <View style={styles.logo}>
                <Image source={imgLogo} style={styles.imgLogo} />
              </View>

        </View>
          

      </View>
      
    </View>
  );
}