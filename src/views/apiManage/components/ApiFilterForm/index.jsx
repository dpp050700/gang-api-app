const { defineComponent, reactive } = require('vue')

const ApiFilterForm = defineComponent({
  setup() {
    const state = reactive({
      searchForm: {
        leader: 'shanghai',
        group: ''
      }
    })
    const change = (value, key) => {
      state.searchForm[key] = value
    }
    return () => (
      <div>
        <a-form model={state.searchForm} layout="inline">
          <a-form-item label="接口负责人">
            <a-select
              onChange={value => change(value, 'leader')}
              value={state.searchForm.leader}
              placeholder="选择接口负责人"
              size="small"
            >
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="接口分组">
            <a-select
              onChange={value => change(value, 'group')}
              value={state.searchForm.group}
              placeholder="选择接口分组"
              size="small"
            >
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </a-form>
      </div>
    )
  }
})

export default ApiFilterForm
