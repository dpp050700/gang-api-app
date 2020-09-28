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
        <ul>
          {state.treeData.map(item => {
            return (
              <li>
                <div
                  onClick={() => {
                    expend(item)
                  }}
                >
                  {item.expend ? (
                    <Fragment>
                      <CaretDownOutlined class="api-tree_arrow" />
                      <FolderOpenOutlined />
                    </Fragment>
                  ) : (
                    <Fragment>
                      <CaretRightOutlined class="api-tree_arrow" />
                      <FolderOutlined />
                    </Fragment>
                  )}
                  {item.name}
                </div>
                {item.expend ? (
                  <ul>
                    <li>
                      <RequestTypeTag type="post" />
                      获取用户状态
                    </li>
                    <li>获取我的代办</li>
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
