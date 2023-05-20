import { Form, Button, Input, Space, Select } from 'antd'

const BasicForm = ({ submitBasicInfo }) => {
    const onFinish = (values) => {
        submitBasicInfo(values)
    };
    return <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 12,
        }}
        style={{
            maxWidth: 1000,
        }}
        onFinish={onFinish}
    >
        <Space size={25}>
            <Form.Item
                label="姓名"
                name="name"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="性别"
                name="sex"
            >
                <Select
                    style={{
                        width: 115,
                    }}
                    options={[
                        {
                            value: '男',
                            label: '男',
                        },
                        {
                            value: '女',
                            label: '女',
                        },
                    ]}
                />
            </Form.Item>
        </Space>

        <Space size={3}>
            <Form.Item
                label="年龄"
                name="age"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="籍贯"
                name="from"
            >
                <Input />
            </Form.Item>
        </Space>
        <Space size={3}>
            <Form.Item
                label="邮箱"
                name="email"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="电话"
                name="phone"
            >
                <Input />
            </Form.Item>
        </Space>
        <Form.Item>
            <Button htmlType="submit">确定</Button>
        </Form.Item>
    </Form >
}

// //把store里储存的状态映射到要传给UI组件的参数上去
// const mapStateToProps = (state) => {
//     console.log(state, 'view')
// }

// //把用于修改store里储存的状态的dispatch函数映射到要传给UI组件的参数上去
// const mapDispatchToProps = (dispatch) => {
//     //注意对象的键才是props的参数名
//     return {
//         submitBasicInfo: (values) => dispatch(createAction('SUBMIT', values)),
//     }
// }

// //用connect函数包裹UI组件，得到容器组件，能够与store进行连接
// const BasicForm = connect(mapStateToProps, mapDispatchToProps)(View)
export default BasicForm
