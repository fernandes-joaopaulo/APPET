import React from 'react';
import api from '../services/api.js';
import { StyleSheet, View, Text } from 'react-native';

export default function Membro(){

    const [membros, setMembros] = React.useState([]);

    React.useEffect(() => {
        api.get('/membros').then((response) => {
            const data = response.data;
            setMembros(data); 
        }).catch(error => {
            console.error('Erro ao carregar membros:', error);
        });
    }, []);

    return (
        <View>
            {membros.map((membro, index) => (
                <View style={styles.membro} key={index}>
                    <Text style={styles.name}>{membro.name}</Text>
                    <Text style={styles.descricao}>{membro.cargo}</Text>
                    <Text style={styles.descricao}>{membro.email}</Text>
                    <Text style={styles.descricao}>{membro.aniversario}</Text>
                </View>
            ))}
        </View>
    );

};

const styles = StyleSheet.create({
    membro:{
        borderTopWidth: 0.2,
        padding: 15,
    },
    name:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#FDB833",
    },
    descricao:{
        color: "gray",
        fontSize: 16,
    }
});
