import React, {useState} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image} from 'react-native';
import styles from './estilos/estilo';
import firebase from './firebaseConnect';
import imgLogo from './assets/logo.png';

console.disableYellowBox=true;

export default function login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    //redefinir Senha
    async function forgotPassword(){

      
      //redefinir Senha
      await firebase.auth().sendPasswordResetEmail(email)
          .then(() => {
              alert('Verifique sua caixa de e-mail.')
              
          })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
      });
    }

    async function logar(){
      await firebase.auth().signInWithEmailAndPassword(email, password)
      
      .then( (value) => {
        alert('Bem-vindo: ' + value.user.email);
        setUser(value.user.email);
      })

      .catch( (error) => {
        alert('Ops algo deu errado!');
        return;
      })

      setEmail('');
      setPassword('');
    }

    async function logout(){
    await firebase.auth().signOut();
    setUser('');
    alert('Deslgoado com sucesso!');
    }

    return (
      <View style={styles.body}>

        <View style={styles.form}>

          <View style={styles.conteudo}>
          <View ><Text style={styles.titulo}>Login</Text></View>
              <Text style={styles.texto}>Email</Text>
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
              onChangeText={(texto) => setPassword(texto) }
              value={password}
              />

              <View style={styles.botoes}>
              
                  <TouchableOpacity style={styles.botao} onPress={logar}>
                    <Text style={styles.textoBotao}>Acessar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.botao} onPress={forgotPassword}>
                    <Text style={styles.textoBotao}>Nova senha</Text>
                  </TouchableOpacity>

              </View>

              <Text style={{marginTop: 20, marginBottom: 20, fontSize: 23, textAlign: 'center', color: 'white'}}>
              {user}
              </Text>

              {user.length > 0 ?
              (
              <TouchableOpacity style={styles.botao} onPress={logout}>
                <Text style={styles.textoBotao}>Deslogar</Text>
              </TouchableOpacity>

              ) :

              (
              <Text style={styles.usuario}>
              Nenhum usuario esta logado
              </Text>
              )}

              <View style={styles.logo}>
                <Image source={imgLogo} style={styles.imgLogo} />
              </View>

            </View>
          

        </View>

    </View>
    )
}
