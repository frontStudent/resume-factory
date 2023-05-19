import MyDoc from '../WorkSpace'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import styled from 'styled-components'
import { Space, Card } from 'antd'
const Root = styled.div`
    display: flex;
    flex-direction: column;
`
const ResumeViewer = () => {
    return <Root>
        <Space direction="vertical" size={30}>
            <Card
                title="简历预览"
                style={{
                    width:'60%',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', 
                }}
                bodyStyle={{
                    textAlign:'center'
                }}
                extra={<PDFDownloadLink document={<MyDoc />} fileName="我的简历.pdf" style={{
                    color: '#ccc',
                    backgroundColor: 'black',
                    padding: '9px',
                    borderRadius: '5px',
                    width: '150px',
                    textAlign: 'center',
                    textDecoration: 'none',
                }}>
                    {({ blob, url, loading, error }) =>
                        loading ? '正在加载..' : '保存简历为pdf'
                    }
                </PDFDownloadLink>}

            >
                <PDFViewer style={{ 
                    height: '100vh', 
                    width: '50vw',
                    border:'none'
                }}>
                    <MyDoc />
                </PDFViewer>
            </Card>


        </Space>
    </Root>
}
export default ResumeViewer
