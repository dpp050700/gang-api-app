import { defineComponent } from 'vue'
import ApiTree from './components/ApiTree/index'
import './index.less'

const Index = defineComponent({
  setup() {
    return () => {
      return (
        <div class="api-manage_container">
          <div class="api-manage_list">
            <ApiTree />
          </div>
          <div class="api-manage_content"></div>
        </div>
      )
    }
  }
})

export default Index
