import { defineComponent, reactive } from 'vue'
import ApiTree from './components/ApiTree/index'
import ApiFilterForm from './components/ApiFilterForm/index'
import RequestTypeTag from './components/ApiTree/RequestTypeTag'
import CopyIcon from '../../components/icon/copy'
import MockList from './components/MockList'
import AceEditor from '../../components/AceEditor/AceEditor'
import './index.less'

const Index = defineComponent({
  setup() {
    const state = reactive({
      req_body: {
        mobile: 15062264069,
        password: '360e46f15f432af83c77017177a759aba8a58519'
      },
      currentApi: null
    })

    const changeApi = data => {
      state.currentApi = data
    }
    return () => {
      return (
        <div class="api-manage_container">
          <div class="api-manage_list">
            <div class="api-filter-form_container">
              <ApiFilterForm />
            </div>
            <div class="api-tree_container">
              <ApiTree onClick={changeApi} />
            </div>
          </div>
          <div class="api-manage_content">
            <a-tabs class="tab-container">
              <a-tab-pane key="1" tab="预览">
                {state.currentApi ? (
                  <div class="tab-content">
                    <div class="baseInfo">
                      <div class="baseInfo_item">
                        <label>接口名称:</label>
                        <span>{state.currentApi.name}</span>
                      </div>
                      <div class="baseInfo_item">
                        <label>请求方式:</label>
                        <span>
                          <RequestTypeTag type={state.currentApi.type} />
                        </span>
                      </div>
                      <div class="baseInfo_item">
                        <label>接口路径:</label>
                        <span>{state.currentApi.url}</span>
                        <span>
                          <CopyIcon value={state.currentApi.url} />
                        </span>
                      </div>
                      <div class="baseInfo_item">
                        <label>创建时间:</label>
                        <span>2020-09-09</span>
                      </div>
                      <div class="baseInfo_item">
                        <label>更新时间:</label>
                        <span>2020-09-19</span>
                      </div>
                      <div class="baseInfo_item">
                        <label>更新人:</label>
                        <span>此间少年9</span>
                      </div>
                    </div>
                    <div>
                      <div>请求参数</div>
                      <AceEditor style={{ minHeight: '200px' }} data={state.req_body} />
                    </div>
                    <div>返回参数</div>
                    <AceEditor style={{ minHeight: '200px' }} data={state.req_body} />
                  </div>
                ) : (
                  ''
                )}
              </a-tab-pane>
              <a-tab-pane key="2" tab="编辑">
                <div class="tab-content">预览</div>
              </a-tab-pane>
              <a-tab-pane key="3" tab="运行">
                <div class="tab-content">{state.currentApi ? <MockList apiDetail={state.currentApi} /> : null}</div>
              </a-tab-pane>
            </a-tabs>
          </div>
        </div>
      )
    }
  }
})

export default Index
