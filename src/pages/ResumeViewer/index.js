import Resume from '../Resume'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import styled from 'styled-components'
import { Space, Card } from 'antd'
import { connect } from 'react-redux'

const Root = styled.div`
    display: flex;
    flex-direction: column;
`
const Index = ({basicInfo}) => {
    return <Root>
        <Space direction="vertical" size={30}>
            <Card
                title="简历预览"
                style={{
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', 
                }}
                bodyStyle={{
                    textAlign:'center'
                }}
                extra={<PDFDownloadLink document={<Resume />} fileName="我的简历.pdf" style={{
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
                    <Resume basicInfo={basicInfo}/>
                </PDFViewer>
            </Card>
        </Space>
    </Root>
}
//把store里储存的状态映射到要传给UI组件的参数上去
const mapStateToProps = (state) => {
    console.log(state, 'view')
    return {
        basicInfo: state.basicInfo
    }
}

//把用于修改store里储存的状态的dispatch函数映射到要传给UI组件的参数上去
const mapDispatchToProps = (dispatch) => {
    return {}
}
//用connect函数包裹UI组件，得到容器组件，能够与store进行连接
const ResumeViewer = connect(mapStateToProps, mapDispatchToProps)(Index)
export default ResumeViewer
