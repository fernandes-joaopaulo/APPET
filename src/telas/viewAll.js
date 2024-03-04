import {Text, ScrollView, StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';
import Produto from '../components/produto';
import React from "react";
import api from '../services/api.js';

export default function Todos({navigation}){

  const [produtos, setProdutos] = React.useState([]);
  const height = Dimensions.get('screen').height;

  React.useEffect(() => {
      api.get('/produtos').then((response) => {
          const data = response.data;
          setProdutos(data); 
      }).catch(error => {
          console.error('Erro ao carregar produtos:', error);
      });
  }, []);

  return(
        <View style={{backgroundColor: '#FFF', marginBottom: 40, height: height}}>

        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={{width: 70}}>
        
            <Text style={styles.goBack}>Voltar</Text>
        </TouchableOpacity>      
        <ScrollView>

        <Text style={styles.header}>Todos os produtos</Text>

          <View style={styles.flexContainer}>

          {produtos.map((produto, index) => (

              <Produto nome={produto.nome} preco={produto.preco} image={produto.url} descricao={produto.descricao} key={index}/>

          ))}
          
          </View>
        </ScrollView>

        </View>  
  );
}

const styles = StyleSheet.create({
  flexContainer:{
    marginTop: 30,
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  goBack:{
    fontSize: 18,
    padding: 10,
    color: '#FDB833',
    backgroundColor: '#FFF'
  },
  header:{
    fontWeight: "bold",
    fontSize: 22,
    padding: 15,
    backgroundColor: "#FFF"
  },
})