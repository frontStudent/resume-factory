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
});

const Resume = ({basicInfo}) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <BasicInfo basicInfo={basicInfo}/>
        </Page>
    </Document>
);

export default Resume
