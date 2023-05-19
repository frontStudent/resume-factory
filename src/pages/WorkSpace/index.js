import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import BasicInfo from '../../components/BasicInfo'
const aa = require('../../fonts/DENG.TTF')
Font.register({
    family: 'DENG',
    src: aa
});
// Create styles
const styles = StyleSheet.create({
    page: {
        fontFamily: 'DENG',
        margin: '30px'
    },
    title:{
        width:'90%',
        fontSize:'30px',
        fontWeight:'bold',
        paddingBottom:'10px',
        marginBottom:'10px',
        borderBottom:'1px solid #ccc'
    }
});

const basicInfo = {
    age:22,
    sex:'男',
    phone:'13228875978',
    from:'上海',
    job:'后端开发',
    email:'666888qq.com'
}
const MyResume = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.title}>施雨贝</Text>
            <BasicInfo basicInfo={basicInfo}/>
        </Page>
    </Document>
);

export default MyResume
