import { defineComponent, Fragment, reactive } from 'vue'
import { CaretDownOutlined, FolderOutlined, CaretRightOutlined, FolderOpenOutlined } from '@ant-design/icons-vue'
import RequestTypeTag from './RequestTypeTag'
import './index.less'

const treeData = [{ name: '项目一测试接口', expend: true }]

const ApiTree = defineComponent({
  setup() {
    const state = reactive({
      treeData
    })
    const expend = item => {
      item.expend = !item.expend
    }
    return () => {
      return (
        <ul class="api-group">
          {state.treeData.map(item => {
            return (
              <li class="api-group_item">
                <div
                  onClick={() => {
                    expend(item)
                  }}
                  class="api-group_name"
                >
                  {item.expend ? (
                    <Fragment>
                      <CaretDownOutlined class="api-tree_arrow" />
                      <FolderOpenOutlined class="api-tree_folder" />
                    </Fragment>
                  ) : (
                    <Fragment>
                      <CaretRightOutlined class="api-tree_folder" />
                      <FolderOutlined class="api-tree_folder" />
                    </Fragment>
                  )}
                  {item.name}
                </div>
                {item.expend ? (
                  <ul class="api-group_list">
                    <li class="api-item">
                      <RequestTypeTag type="post" />
                      获取用户状态
                    </li>
                  </ul>
                ) : null}
              </li>
            )
          })}
        </ul>
      )
    }
  }
})

export default ApiTree
