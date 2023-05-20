import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React,{useMemo} from 'react';
import BasicRow from './BasicRow';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: '8px',
    },
    title: {
        width: '90%',
        fontSize: '30px',
        fontWeight: 'bold',
        paddingBottom: '10px',
        marginBottom: '10px',
        borderBottom: '1px solid #ccc'
    }
});
const BasicInfo = ({ basicInfo = { sex: '男', from: '上海', age: 18 } }) => {
    const labelMap = useMemo(()=>({
        sex:'性别',
        from:'籍贯',
        age:'年龄',
        email:'邮箱',
        phone:'电话'
    }),[])
    
    const entries = Object.entries(basicInfo).filter(([key, value]) => value !== undefined && key !== 'name')
    const lastIndex = entries.length - 1
    return (
        <View style={{ fontSize: '15px' }}>
            <Text style={styles.title}>{basicInfo?.name ? basicInfo?.name : '张三'}</Text>
            {entries.map(([key, value], index) => {
                if (index % 2 === 0) {
                    // Render a new row for every even index
                    return (
                        <BasicRow key={index}
                            label1={labelMap[key]}
                            label2={index + 1 <= lastIndex ? labelMap[entries[index + 1][0]] : undefined}
                            value1={value}
                            value2={index + 1 <= lastIndex ? entries[index + 1][1] : undefined}
                        />
                    );
                } else {
                    // Skip odd indicessince they've already been rendered in a previous row
                    return null;
                }
            })}
        </View>
    )
}

export default BasicInfo