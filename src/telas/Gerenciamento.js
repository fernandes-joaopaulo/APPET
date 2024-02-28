import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, TextInput, Alert, Modal} from "react-native";
import newUser from "../../assets/img/icon-new-user.png";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import api from '../services/api.js';
import { useState } from "react";

export default function Gerenciamento({navigation}){

    const [membros, setMembros] = React.useState([]);

    React.useEffect(() => {
        api.get('/membros').then((response) => {
            const data = response.data;
            setMembros(data); 
        }).catch(error => {
            console.error('Erro ao carregar membros:', error);
        });
    }, []);

    const [modalVisible, setModalVisible] = useState(false);
    const [opacity, setOpacity] = useState(1);

    React.useEffect(() => {
        if (modalVisible) {
            setOpacity(0.5);
        } else {
            setOpacity(1);
        }
    }, [modalVisible]);

    return ( <>
        <View style={[styles.container, {opacity: opacity}]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.goBack}>Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.header}>Gerenciamento</Text>
            <TouchableOpacity>
                <Image source={newUser} style={styles.image}/>
            </TouchableOpacity>
        </View>

        <ScrollView style={[styles.scroll, {opacity: opacity}]}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                
                <View style={styles.modalView}>
                
                        <View>

                            <Text style={styles.label}>Nome</Text>
                                <TextInput style={styles.input}/>
                            <Text style={styles.label}>Cargo</Text>
                                <TextInput style={styles.input}/>
                            <Text style={styles.label}>Email</Text>
                                <TextInput style={styles.input}/>
                            <Text style={styles.label}>Aniversário</Text>
                                <TextInput style={styles.input}/>

                        </View>
                
                        <View style={{display: 'flex', flexDirection: 'row'}}>

                            <TouchableOpacity style={[styles.btn, {backgroundColor: '#49B637'}]}>

                                <MaterialCommunityIcons name={'pencil'} color={'#FFF'} size={20}/>
                                <Text style={styles.textBtn}>Editar</Text>

                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.btn, {backgroundColor: '#CB3636'}]}>

                                <MaterialCommunityIcons name={'trash-can'} color={'#FFF'} size={20}/>
                                <Text style={styles.textBtn}>Apagar</Text>

                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
                                <Text style={{color: '#FFF', marginTop: 20, fontWeight: 'bold'}}>Voltar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

            <View>
                {membros.map((membro, index) => (
                    <View style={styles.membro} key={index}>

                        <Text style={styles.name}>{membro.name}</Text>
                        <Text style={styles.descricao}>{membro.cargo}</Text>

                        <View style={{display: 'flex', flexDirection: 'row-reverse'}}>

                            <TouchableOpacity style={styles.view}  onPress={() => setModalVisible(true)}>
                                <MaterialCommunityIcons name={'eye'} color={'#FFF'} size={20}/>
                                <Text style={styles.viewText}>Visualizar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    </>
    );
};

const styles = StyleSheet.create({

    container:{
      backgroundColor: "#FFF",  
    },
    header:{
        fontSize: 36,
        fontWeight: "900",
        textAlign: "center",
        marginTop: 100,
        marginBottom: 60,
    },
    image:{
        width: 50,
        height: 50,
        marginBottom: 10,
        marginLeft: 5,
    },
    scroll:{
        backgroundColor: "#FFF",
        opacity: 1,
    },
    goBack:{
        fontSize: 18,
        padding: 10,
        color: '#FDB833'
    },
    membro:{
        borderTopWidth: 0.2,
        padding: 15,
    },
    name:{
        fontSize: 24,
        fontWeight: "bold",
    },
    descricao:{
        color: "gray",
        fontSize: 16,
    },
    view:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#5A97D6',
        width: 124,
        height: 32,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewText:{
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
        paddingLeft: 10
    },

    ///////////////// MODAL VIEW ////////////////////////////////

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: '#5A97D6',
        borderRadius: 8,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      input:{
        backgroundColor: '#FFF',
        width: 223,
        height: 34,
        borderRadius: 8,
        marginBottom: 20,
        borderWidth: 0.5
      },
      label:{
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
      },
      btn:{
        display: 'flex',
        flexDirection: 'row',
        width: 85,
        height: 37,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 8
      },
      textBtn:{
        color: '#FFF',
        fontWeight: 'bold',
        marginLeft: 5,
      }
})