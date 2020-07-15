import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Item({ title, data }) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>{data.band_name}</Text>
                <Text style={styles.country}>{data.origin}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>{data.formed}</Text>
                <Text style={styles.text}>{data.fans}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      borderBottomColor: "#666",
      borderBottomWidth: 1,
      width: 400
    },

    row: {
        flex: 1,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
        textAlign: 'center',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 7,
        color: '#fff'
    },

    text: {
        color: '#fff'
        // margin: 7
,    },

    country: {
        color: '#999'
    }
  });