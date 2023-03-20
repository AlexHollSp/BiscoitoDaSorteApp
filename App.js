/* Importing the react library and the react native library. */
/* Importando a biblioteca react e a biblioteca nativa react. */
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

/* Creating a function called App that is going to be used to create the app. */
function App(){
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase]= useState ('');

  /* Creating an array of strings. */
  let frase = 
    ['FRASE 1', 'FRASE 2', 'FRASE 3', 'FRASE 4'];
  


  /* It generates a random number and displays a phrase.*/
  /* Gerando um número aleatório e exibindo um frase de acordo com o número. */
  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random()* frase.length)

    setTextoFrase(' "' + frase[numeroAleatorio]+'" ');

    setImg(require('./src/biscoitoAberto.png'));
  }

  /* It resets the image and text to the original state.*/
  /* Função de reset do biscoito, com alteração de imagem */
  function reiniciar(){
  setImg(require('./src/biscoito.png'));
  setTextoFrase('');
  };

  

  /* Returning the view of the app. */
  return(
    <View style={style.container}>

      

      <Image
      source={img}
      style={style.img}
      />
      
     
      <Text style={style.textoFrase}> {textoFrase} </Text>

      
      <TouchableOpacity style={style.botao} onPress={ quebraBiscoito }>
        <View style={style.btnArea}>
          <Text style={style.btnTexto}>Quebra Biscoito</Text>
        </View>
      </TouchableOpacity>

      
      
      <TouchableOpacity style={[style.botao, {marginTop: 15, borderColor: '#121212'}]} onPress={reiniciar}>
        <View style={style.btnArea}>
          <Text style={[style.btnTexto, { color: '#121212'}]}>Reiniciar Texto</Text>
        </View>
      </TouchableOpacity>
     

    </View>
  );
}

/* Creating a style sheet for the app. */
const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: "italic",
    textAlign: 'center',
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 3,
    borderRadius: 25,
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto:{
    fontSize:18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
})


export default App;