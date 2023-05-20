import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: '8px',
    },
});
const BasicRow = ({ label1,value1,label2,value2}) => {
    return (
            <View style={styles.row}>
                {value1 && <Text style={{
                    width: '40%'
                }}>{label1}：{value1}</Text>}
                {value2 && <Text style={{
                    width: '50%'
                }}>{label2}：{value2}</Text>}
            </View>
    )
}

export default BasicRow