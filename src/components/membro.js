import React from 'react';
import api from '../services/api.js';
import { StyleSheet, View, Text } from 'react-native';

export default function Membro(){

    const [membros, setMembros] = React.useState([]);

    React.useEffect(() => {
        api.get('/membros').then((response) => {
            setMembros(response.data);
        });
    }, []);

    return (
        <View style={styles.membro}>
            <Text style={styles.name}>Aurea</Text>
            <Text style={styles.descricao}></Text>
            <Text style={styles.descricao}></Text>
            <Text style={styles.descricao}></Text>
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
        fontSize: 16.
    }
});