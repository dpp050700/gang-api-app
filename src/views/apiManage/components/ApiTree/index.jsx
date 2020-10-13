import { defineComponent, Fragment, reactive } from 'vue'
import { CaretDownOutlined, FolderOutlined, CaretRightOutlined, FolderOpenOutlined } from '@ant-design/icons-vue'
import RequestTypeTag from './RequestTypeTag'
import apiList from '../../../../mock/apiList'
import './index.less'

const ApiTree = defineComponent({
  props: {
    onClick: {
      type: Function
    }
  },
  setup(props) {
    const state = reactive({
      apiList
    })
    const expend = item => {
      item.expend = !item.expend
    }
    const clickApi = data => {
      props.onClick(data)
      console.log(data)
    }
    return () => {
      console.log(this)
      return (
        <ul class="api-group">
          {state.apiList.map(item => {
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
                    {item.children.map(_item => {
                      return (
                        <li
                          class="api-item"
                          onClick={() => {
                            clickApi(_item)
                          }}
                        >
                          <RequestTypeTag type={_item.type} />
                          {_item.name}
                        </li>
                      )
                    })}
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
