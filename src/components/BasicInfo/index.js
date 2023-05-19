import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import React from 'react';
const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        marginBottom:'8px',
    }
});
const BasicInfo = ({ basicInfo }) => {
    return (
        <View style={{fontSize:'15px'}}>
            <View style={styles.row}>
                <Text style={{
                    width:'40%'
                }}>性别：{basicInfo.sex}</Text>
                <Text style={{
                    width:'50%'
                }}>年龄：{basicInfo.age}</Text>
            </View>
            <View style={styles.row}>
                <Text style={{
                    width:'40%'
                }}>籍贯：{basicInfo.from}</Text>
                <Text style={{
                    width:'50%'
                }}>联系电话：{basicInfo.phone}</Text>
            </View>
            <View style={styles.row}>
                <Text style={{
                    width:'40%'
                }}>电子邮箱：{basicInfo.email}</Text>
                <Text style={{
                    width:'50%'
                }}>求职意向：{basicInfo.job}</Text>
            </View>
        </View>
    )
}

export default BasicInfo