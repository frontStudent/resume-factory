import { Collapse } from 'antd';
import { connect } from 'react-redux'
import createAction from '../../store/action'
import BasicForm from '../BasicForm';
import { EditOutlined } from '@ant-design/icons';
import './index.css'
const { Panel } = Collapse;

const text = `
  暂未开发
`;
const Index = ({ submitBasicInfo }) => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <Collapse defaultActiveKey={['1']} onChange={onChange} style={{ width: '600px',margin:'0 20px' }}>
            <Panel header={<>编辑你的简历信息 <EditOutlined/></>} key="0" showArrow={false} disabled>
            </Panel>
            <Panel header="基本信息" key="1">
                <BasicForm />
            </Panel>
            <Panel header="项目经历" key="2">
                <p>{text}</p>
            </Panel>
            <Panel header="工作经历" key="3">
                <p>{text}</p>
            </Panel>
        </Collapse>
    );
};
//把store里储存的状态映射到要传给UI组件的参数上去
const mapStateToProps = (state) => {
    console.log(state, 'view')
}

//把用于修改store里储存的状态的dispatch函数映射到要传给UI组件的参数上去
const mapDispatchToProps = (dispatch) => {
    //注意对象的键才是props的参数名
    return {
        submitBasicInfo: (values) => dispatch(createAction('SUBMIT', values)),
    }
}

//用connect函数包裹UI组件，得到容器组件，能够与store进行连接
const FormArea = connect(mapStateToProps, mapDispatchToProps)(Index)
export default FormArea