import { defineComponent } from 'vue'
import ApiTree from './components/ApiTree/index'
import ApiFilterForm from './components/ApiFilterForm/index'
import RequestTypeTag from './components/ApiTree/RequestTypeTag'
import CopyIcon from '../../components/icon/copy'
import './index.less'

const Index = defineComponent({
  setup() {
    return () => {
      return (
        <div class="api-manage_container">
          <div class="api-manage_list">
            <div class="api-filter-form_container">
              <ApiFilterForm />
            </div>
            <div class="api-tree_container">
              <ApiTree />
            </div>
          </div>
          <div class="api-manage_content">
            <a-tabs class="tab-container">
              <a-tab-pane key="1" tab="预览">
                <div class="tab-content baseInfo">
                  <div class="baseInfo_item">
                    <label>接口名称:</label>
                    <span>获取用户列表</span>
                  </div>
                  <div class="baseInfo_item">
                    <label>请求方式:</label>
                    <span>
                      <RequestTypeTag type="post" />
                    </span>
                  </div>
                  <div class="baseInfo_item">
                    <label>接口路径:</label>
                    <span>/api/name/test</span>
                    <span>
                      <CopyIcon value="/api/name/test" />
                    </span>
                  </div>
                  <div class="baseInfo_item">
                    <label>请求状态:</label>
                    <span>
                      <RequestTypeTag type="post" />
                    </span>
                  </div>
                </div>
              </a-tab-pane>
              <a-tab-pane key="2" tab="编辑">
                <div class="tab-content">预览</div>
              </a-tab-pane>
              <a-tab-pane key="3" tab="运行">
                <div class="tab-content">预览</div>
              </a-tab-pane>
            </a-tabs>
          </div>
        </div>
      )
    }
  }
})

export default Index
