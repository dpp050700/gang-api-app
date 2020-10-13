const { defineComponent, reactive } = require('vue')
import { BugOutlined } from '@ant-design/icons-vue'
import LoginMock from '@/mock/login.js'
import http from '@/plugin/http/index'

const MockList = defineComponent({
  props: {
    apiDetail: {
      type: Object
    }
  },
  setup(props) {
    const handleRequest = data => {
      http[props.apiDetail.type](props.apiDetail.url, data.record.reqBody).then(data => {
        console.log(data)
      })
    }
    const state = reactive({
      data: LoginMock,
      columns: [
        {
          title: 'Mock 标题',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '请求参数',
          dataIndex: 'reqBody',
          key: 'reqBody',
          width: 180
        },
        {
          title: 'Mock 返回',
          dataIndex: 'resBody',
          key: 'rsqBody',
          ellipsis: true
        },
        {
          title: '操作',
          dataIndex: 'operation',
          key: 'operation',
          customRender: data => (
            <a-button
              type="primary"
              onClick={() => {
                handleRequest(data)
              }}
            >
              <BugOutlined />
            </a-button>
          )
        }
      ]
    })
    return () => (
      <a-table columns={state.columns} data-source={state.data}>
        <template name="operation">1112</template>
      </a-table>
    )
  }
})

export default MockList
