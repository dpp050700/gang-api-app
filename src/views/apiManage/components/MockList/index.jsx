const { defineComponent, reactive } = require('vue')

const MockList = defineComponent({
  setup() {
    const state = reactive({
      data: [
        {
          key: '1',
          name: 'John Brown111',
          age: 32,
          address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
          tags: ['nice', 'developer']
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 2 Lake Park, London No. 2 Lake Park',
          tags: ['loser']
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher']
        }
      ],
      columns: [
        {
          title: '标题',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '请求参数',
          dataIndex: 'age',
          key: 'age',
          width: 80
        },
        {
          title: '返回参数',
          dataIndex: 'address',
          key: 'address 1',
          ellipsis: true
        },
        {
          title: '创建日期',
          dataIndex: 'address',
          key: 'address 2',
          ellipsis: true
        },
        {
          title: '操作',
          dataIndex: 'operation',
          key: 'operation',
          scopedSlots: { customRender: 'operation' }
        }
      ]
    })
    return () => (
      <a-table
        columns={state.columns}
        data-source={state.data}
        scopedSlots={{
          operation: () => {
            return 'action'
          }
        }}
      ></a-table>
    )
  }
})

export default MockList
